<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\City;
use App\State;
use App\DataTables\CitiesDataTable;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CitiesDataTable $dataTable)
    {
        return $dataTable->render('admin.cities.index'); 
    }

    public function indexCitiesState(CitiesDataTable $dataTable, State $state){
        return $dataTable->with(['state_id' => $state->id])->render('admin.cities.citiesState', compact('state'));
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([ 
            'name' => 'required',
            'state_id' => 'exists:states,id'
        ]);
        
        $redirectRoute = route('admin.cities.index');
        if($request->input('_freezeState')){
            $redirectRoute = route('admin.cities.state.index', $request->input('state_id'));
        }
        $city = City::create($request->all());

        return redirect($redirectRoute)->with(['status' => $city->name . ' is added successfully!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(City $city)
    {
        
        return view('admin.cities.edit', compact('city'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city)
    {
        $request->validate([ 
            'name' => 'required',
            'state_id' => 'exists:states,id'
        ]);

        $city = $city->update($request->all());

        return redirect(route('admin.cities.index'))->with(['status' => $request->input('name') . ' is updated successfully!']);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        $city->delete();

        return redirect()->back()->with('status', $city->name . ' deleted Successfully!');
    }
}
