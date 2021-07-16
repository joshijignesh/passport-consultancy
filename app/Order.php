<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use App\Setting;

class Order extends Model
{
    protected $fillable = [
        'name', 
        'email', 
        'mobile', 
        'message',
        'applyFor',
        'typeOfApplication',
        'typeOfpassportBooklet',
        'dateOfBirth',
        'isLostDamaged',
        'isExpired',
        'order_status' 
    ];

    public function payment(){
        return $this->hasOne('App\Payment');
    }

    public function appdata(){
        return $this->hasOne('App\Appdata');
    }

    public function application(){
        return $this->hasOne('App\Application');
    }
    public function calculateOrderAmount(){
        $new_reissue_below18 = intval(Setting::where('option_name','basic_fees')->get()->first()->option_value);
        $new_reissue_above18 = intval(Setting::where('option_name','basic_fees')->get()->first()->option_value);
        $additionalPages = intval(Setting::where('option_name','additional_page_fees')->get()->first()->option_value);
        $lostDemage_notExpired_price = intval(Setting::where('option_name','lost_damaged_fees')->get()->first()->option_value);
        $consultancyFee = intval(Setting::where('option_name','consultancy_fees')->get()->first()->option_value);
        $age = $this->calculateAge();
        $amount;
        if($this->typeOfApplication === 'new'){
            if($age>18){
                $amount = $new_reissue_above18 + $consultancyFee; 
                if($this->typeOfpassportBooklet === 'big'){
                    $amount += $additionalPages;
                } 
            }else{
                $amount = $new_reissue_below18 + $consultancyFee;
            }
        }else{
            if($age>18){
                $amount = $new_reissue_above18 + $consultancyFee; 
                if($this->isLostDamaged && !$this->isExpired){
                    $amount += $lostDemage_notExpired_price;
                }

                if($this->typeOfpassportBooklet === 'big'){
                    $amount += $additionalPages;
                } 
            }else{
                $amount = $new_reissue_below18 + $consultancyFee;
                if($this->isLostDamaged && !$this->isExpired){
                    $amount += $lostDemage_notExpired_price;
                }
            }
        }

        return $amount;
    }

    public function calculateAge(){ 
        return  floor(Carbon::parse($this->dateOfBirth)->floatDiffInYears(Carbon::now())); 
    }
}
