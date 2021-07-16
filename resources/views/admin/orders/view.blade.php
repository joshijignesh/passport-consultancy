@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a href={{ route('admin.order.index') }}>Orders</a>
    </li>
    <li class="breadcrumb-item active">
       View Details
    </li>
@endsection
@php
    function generateAppViews($control, $col="4"){
         
        $label = $control->inputLabel;
        $value = $control->value;
        if($control->elementType === 'date'){
            $value = Carbon\Carbon::parse($value)->format('d-m-Y');
        }
        
        if($control->elementType === 'switch' || $control->elementType === 'checkboxGroup'){
            $value = $value ? 'Yes' : 'No';
        }

        if($control->elementType === 'select' || $control->elementType === 'radio'){
            $opts = $control->elementConfig->options ? $control->elementConfig->options : []; 
            if(count($opts) > 0){ 
                foreach ($opts as $key=>$valueopt) { 
                    if($valueopt->value === $value){ 
                        $value = $valueopt->displayValue; 
                    }
                }
            }
        }

       

     
        echo "<div class='col-sm-".$col."'><p>";
        echo "<b>".$label.": </b>";
        echo "<span>" .$value. "</span>";
        echo "</p></div>";
    }

  
@endphp
@section('content')
    <div class="card-header">View Passport Application Details</div>
        <div class="card-body"> 
             @include('admin.orders.inc.order_summary')
             <hr/>
             @include('admin.orders.inc.service')
             @include('admin.orders.inc.applicant');
             @include('admin.orders.inc.family')
             @include('admin.orders.inc.presentres')
             @include('admin.orders.inc.emercont')
             @include('admin.orders.inc.prevpassport')
             @include('admin.orders.inc.other')
             @include('admin.orders.inc.document') 
        </div>
    </div>
@endsection
 

@push('styles')
    <style>
       .underlineBox{
           width: 300px;
           height: 2px;
           display: block;
           background-color: #000000;
           margin: 10px auto 20px;
       }
    </style>
@endpush