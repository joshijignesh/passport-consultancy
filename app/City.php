<?php

namespace App;

use Illuminate\Database\Eloquent\Model; 

class City extends Model
{
    protected $fillable = ['name', 'state_id'];

    public function state(){
        return $this->belongsTo('App\State');
    }

    public function stations(){
        return $this->hasMany('App\PoliceStation');
    }
}
