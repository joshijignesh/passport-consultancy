<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appdata extends Model
{
    protected $fillable = ['appdata'];

    public function order(){
        $this->belongsTo('App\Order');
    }
}
