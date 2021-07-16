<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Appdata;
use App\Payment;
use App\Application;
use Carbon\Carbon;
use Razorpay\Api\Api;
use Razorpay\Api\Errors\SignatureVerificationError;
use Illuminate\Database\QueryException;

class OrderController extends Controller
{
     
    public function createOrder(Request $request){ 
        
        $inputs  = $request->all();
        try{
            $order = Order::create([
                'name' => $inputs['name'],
                'email' => $inputs['email'],
                'mobile' => $inputs['mobile'],
                'message' => $inputs['message'],
                'applyFor' => $inputs['applyFor'],
                'typeOfApplication' => $inputs['typeOfApplication'],
                'typeOfpassportBooklet' => $inputs['typeOfpassportBooklet'],
                'dateOfBirth' =>  Carbon::create( $inputs['dateOfBirth'] ),
                'isLostDamaged' => $inputs['isLostDamaged'],
                'isExpired' =>$inputs['isExpired']
            ]);  
    
            $order->order_amount = $order->calculateOrderAmount();
            $order->save();
    
            $appData = $order->appdata()->save(new Appdata(['appdata' =>$inputs['appdata']]));
            
            //Creating order
            $client = new Api(env('RAZOR_PAY_KEY_ID'), env('RAZOR_PAY_KEY_SECRET'));
            $razorPayOrder = $client->order->create(['amount'=>$order->order_amount*100, 'currency'=>'INR']);
            $razorPayOrder_id = $razorPayOrder['id'];
            $order->payment()->save(new Payment(['razorpay_order_id' => $razorPayOrder_id])); 
            $order->application()->save(new Application(['status' => 'Order Placed']));

            //Creating Options for Client side payment process
            $paymentOptions = new \stdClass();
            $paymentOptions->key = env('RAZOR_PAY_KEY_ID'); 
            $paymentOptions->amount = ($order->order_amount)*100;
            $paymentOptions->currency = 'INR';
            $paymentOptions->name = "Passport Consultancy";
            $paymentOptions->description = "Hassle free passport service.";
            $paymentOptions->image = "/imgs/favicon.png";
            $paymentOptions->order_id = $order->payment->razorpay_order_id;
            $paymentOptions->handler = "";
            $paymentOptions->modal = new  \stdClass();
            $paymentOptions->modal->ondismiss = "";
            $paymentOptions->prefill = new \stdClass();
            $paymentOptions->prefill->name = $order->name;
            $paymentOptions->prefill->email = $order->email;
            $paymentOptions->prefill->contact = $order->mobile;
            $paymentOptions->theme = new \stdClass();
            $paymentOptions->theme->color = "#0F5EA5";
    
            $response = new \stdClass();
            $response->orderData = $order; 
            $response->orderOption =  $paymentOptions;
    
            return json_encode($response);
        }catch(QueryException $e){
            return json_encode(['status' => 'failed']);
        }
      
    }

    public function verifyPayment(Request $request){
        $client = new Api(env('RAZOR_PAY_KEY_ID'), env('RAZOR_PAY_KEY_SECRET'));
        $attributes = array(
            'razorpay_signature'  =>  $request->input('razorpay_signature'),  
            'razorpay_payment_id'  => $request->input('razorpay_payment_id') ,  
            'razorpay_order_id' => $request->input('razorpay_order_id')
        );
        $payment = Payment::where('razorpay_order_id', $request->input('razorpay_order_id') )->get()->first();
        $payment->razorpay_payment_id = $request->input('razorpay_payment_id');
        $payment->razorpay_signature = $request->input('razorpay_signature');
        $payment->save();

       try {
             $paymentCapture = $client->payment->fetch($payment->razorpay_payment_id)->capture(array('amount' => $payment->order->order_amount*100));
             $order = $client->utility->verifyPaymentSignature($attributes);
             $payment->order->update(['order_status' => 'success']);
             return json_encode(['order_ref' => $payment->razorpay_order_id]);
       } catch(SignatureVerificationError $e) {
            $payment->order->update(['order_status' => 'failed']);
             return json_encode(['status' => false]);
       } 
    }

    public function trackOrder(Request $request){
        $payment = Payment::where(['razorpay_order_id' => $request->input('order_ref')])->get()->first();
        $order_contact = $payment->order->mobile;
        if($order_contact === $request->input('mobile')){ 
            return json_encode(['orderstatus' => $payment->order->application->status]);
        }else{
            return json_encode(['status' => false]);
        } 
    }


    public function editOrder(Request $request){
        //Get Order Payment Instance
        $payment = Payment::where('razorpay_order_id' , $request->input('order_ref'))->get()->first();
        
        //Check if mobile is related to Order Ref
        if($payment->order->mobile === $request->input('mobile')){
            return json_encode($payment->order->appdata->appdata);
        }
        return json_encode(['status' => false]);
    }

    public function updateOrderAppData(Request $request){
        //Get Order Payment Instance
        $payment = Payment::where('razorpay_order_id' , $request->input('order_ref'))->get()->first();
                
        //Check if mobile is related to Order Ref
        if($payment->order->mobile === $request->input('mobile')){
                $payment->order->appdata->update(['appdata' => $request->input('appData')]);  
                return json_encode(['status' => true]);
        }
        return json_encode(['status' => false]);
    }
}
