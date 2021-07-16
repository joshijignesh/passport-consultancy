<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = ['schedule', 'status', 'submitted_form', 'application_receipt'];

    public function order(){
        return $this->belongsTo('App\Order');
    }
}
