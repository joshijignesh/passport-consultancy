<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = ['razorpay_order_id','razorpay_payment_id','razorpay_signature'];

    public function order(){
        return $this->belongsTo('App\Order');
    }
}
