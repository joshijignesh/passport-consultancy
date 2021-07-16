<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\Country;
use App\State;
use App\City;
use App\Setting;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

 

Route::get('/countries', function(){
    $countries = Country::all()->toArray();  
    function countriesOpts($country){
        $opts = new stdClass();
        $opts->value = $country['id'];
        $opts->displayValue = $country['name'];
        return $opts;
    }
    $countriesOptions =  array_map( "countriesOpts" ,$countries);
    
    return json_encode($countriesOptions);
});

Route::get('/states/{countryId}', function($id){
    $states = Country::find($id)->states()->orderBy('name', 'asc')->get()->toArray();  
    function statesOpts($state){
        $opts = new stdClass();
        $opts->value = $state['id'];
        $opts->displayValue = $state['name'];
        return $opts;
    }
    $statesOptions =  array_map( "statesOpts" ,$states);
    
    return json_encode($statesOptions);
});

Route::get('cities/{stateId}', function($id){
    $cities = State::find($id)->cities()->orderBy('name', 'asc')->get()->toArray();  
    function statesOpts($city){
        $opts = new stdClass();
        $opts->value = $city['id'];
        $opts->displayValue = $city['name'];
        return $opts;
    }
    $citiesOptions =  array_map( "statesOpts" ,$cities);
    
    return json_encode($citiesOptions);
});

Route::get('stations/{cityId}', function($id){
    $stations = City::find($id)->stations()->orderBy('name', 'asc')->get()->toArray();  
    function statesOpts($station){
        $opts = new stdClass();
        $opts->value = $station['id'];
        $opts->displayValue = $station['name'];
        return $opts;
    }
    $stationsOptions =  array_map( "statesOpts" ,$stations);
    
    return json_encode($stationsOptions);
});
Route::post('order/create','OrderController@createOrder');

Route::post('order/paymentverify', 'OrderController@verifyPayment');

Route::post('order/track', 'OrderController@trackOrder');

Route::get('order/edit', 'OrderController@editOrder');

Route::post('order/updateappdata', 'OrderController@updateOrderAppData');

Route::get('settings', function(){
    $settings = array(); 
   foreach (Setting::all() as  $setting) {
       $newSet = new \stdClass();
       $settings[$setting->option_name] = $setting->option_value; 
   }
    return json_encode($settings);
});
 