<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
 
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 100);
            $table->string('email', 200);
            $table->string('mobile', 12);
            $table->text('message')->nullable();
            $table->enum('applyFor', ['new', 'reissue']);
            $table->enum('typeOfApplication', ['normal', 'tatkaal']);
            $table->enum('typeOfpassportBooklet', ['small', 'big']);
            $table->date('dateOfBirth');
            $table->boolean('isLostDamaged')->nullable();
            $table->boolean('isExpired')->nullable();
            $table->integer('order_amount')->nullable(); 
            $table->enum('order_status', ['pending', 'success', 'failed'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
