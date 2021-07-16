<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\DataTables\PoliceStationsDataTable;
use App\City;
use App\PoliceStation;

class PoliceStationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(PoliceStationsDataTable $dataTable)
    { 
        return $dataTable->render('admin.stations.index'); 
    }
    
    public function indexStationsCity(PoliceStationsDataTable $dataTable, City $city){
        return $dataTable->with(['city_id' => $city->id])->render('admin.stations.stationsCity', compact('city'));
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
            'city_id' => 'exists:cities,id'
        ]);

        $policeStation = PoliceStation::create($request->all());

        return redirect()->back()->with(['status' => $policeStation->name . ' is added successfully!']);
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
    public function edit(PoliceStation $station)
    {
        return view('admin.stations.edit', compact('station'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PoliceStation $station)
    {
        $request->validate([ 
            'name' => 'required',
            'city_id' => 'exists:cities,id'
        ]);

        $station->update($request->all());

        return redirect(route('admin.stations.city.index', $station->city->id))->with(['status' => $station->name . ' is updated successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PoliceStation $station)
    {
        $station->delete();
        return redirect()->back()->with('status', $station->name . ' deleted Successfully!');
    }
}
