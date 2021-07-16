<h4 class="text-center">Order Summary</h4>
<div class="underlineBox"></div>
<div class="row">  
    <div class="col-sm-4">
        <p>
            <b>Name: </b>
            <span>{{ $order->name }}</span>
        </p>
    </div>
    <div class="col-sm-4">
        <p>
            <b>Email: </b>
            <span>{{ $order->email }}</span>
        </p>
    </div>
    <div class="col-sm-4">
        <p>
            <b>Mobile: </b>
            <span>{{$order->mobile}}</span>
        </p>
    </div>    
    <div class="col-sm-4">
        <p>
            <b>Apply For: </b>
            <span class="text-capitalize">{{$order->applyFor}}</span>
        </p>
    </div>
    <div class="col-sm-4">
        <p>
            <b>Type of Application: </b>
            <span class="text-capitalize">{{ $order->typeOfApplication }}</span>
        </p>
    </div>
    <div class="col-sm-4">
        <p>
            <b>Type of Booklet: </b>
            <span>{{ $order->typeOfpassportBooklet === 'big' ? '60 Pages' : '36 Pages' }}</span>
        </p>
    </div>
    <div class="col-sm-4">
        <p>
            <b>Age: </b>
            <span>{{ $order->calculateAge() }}</span>
        </p>
    </div>
   
    @if ($order->applyFor === 'reissue')
    <div class="col-sm-4">
        <p>
            <b>Is Passport Lost or Demaged?: </b>
            <span>{{ $order->isLostDamaged ? 'Yes' : 'No' }}</span>
        </p>
    </div>
    <div class="col-sm-4">
        <p>
            <b>Is Passport Expired?: </b>
            <span>{{ $order->isExpired ? 'Yes' : 'No' }}</span>
        </p>
    </div> 
    
    @endif
    <div class="col-sm-4">
        <p>
            <b>Amount: </b>
            <span>{{ $order->order_amount }}</span>
        </p>
    </div> 
    <div class="col-sm-4">
        <p>
            <b>Order Status: </b>
            <span class="text-capitalize">{{ $order->order_status }}</span>
        </p>
    </div> 
    <div class="col-sm-4">
        <p>
            <b>Message: </b>
            <span>{{ $order->message }}</span>
        </p>
    </div>   
</div>
