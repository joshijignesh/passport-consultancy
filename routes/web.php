<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/app');
});
 
 
Route::view('/app/{path?}', 'welcome')
     ->where('path', '.*');


 
Auth::routes(['register'=> false]);

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function(){
    Route::get('/dashboard', 'HomeController@index')->name('dashboard');
    Route::redirect('/dashboard', '/admin/orders', 301);
    Route::get('/settings','Admin\SettingController@edit')->name('settings.edit');
    Route::put('/settings','Admin\SettingController@update')->name('settings.update');
    Route::resource('/countries', 'Admin\CountryController'); 
    Route::resource('/states', 'Admin\StateController');
    Route::resource('/cities', 'Admin\CityController'); 
    Route::get('/cities/state/{state}', 'Admin\CityController@indexCitiesState')->name('cities.state.index');
    Route::resource('/stations', 'Admin\PoliceStationController');
    Route::get('/stations/city/{city}', 'Admin\PoliceStationController@indexStationsCity')->name('stations.city.index');
    Route::get('/orders', 'Admin\OrderController@index')->name('order.index');
    Route::get('orders/view/{order}', 'Admin\OrderController@orderView')->name('order.view');
    Route::get('orders/xml/{order}', 'Admin\OrderController@genXml')->name('order.xml');
    Route::delete('orders/delete/{order}', 'Admin\OrderController@deleteorder')->name('order.delete');
    Route::get('/application/edit/{application}', 'Admin\ApplicationController@edit')->name('application.edit');
    Route::put('/application/update/{application}', 'Admin\ApplicationController@update')->name('application.update');
   
    Route::get('/storage/{filePath}', 'Admin\StorageController@fileStorageServe')->where(['filePath' => '.*'])->name('storage.file');

    
});

