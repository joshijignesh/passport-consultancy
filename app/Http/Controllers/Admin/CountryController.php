<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Country;
use App\DataTables\CountriesDataTable;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CountriesDataTable $dataTable)
    {
        return $dataTable->render('admin.countries.index'); 

    }

   
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        return redirect(route('admin.country.index'));
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
            'sortname' => 'required | max:3',
            'name' => 'required'
        ]);

        $country = Country::create($request->all());

        return redirect()->back()->with(['status' => 'Country added successfully']);
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
    public function edit(Country $country)
    {

        return view('admin.countries.edit', compact('country'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Country $country)
    { 
        $request->validate([
            'sortname' => 'required | max:3',
            'name' => 'required'
        ]);
        
        $country->sortname = $request->input('sortname');
        $country->name = $request->input('name'); 
        $country->save();
        

        return redirect(route('admin.countries.index'))->with('status', $country->name . ' updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Country $country)
    {
        $country->delete();

        return redirect(route('admin.countries.index'))->with('status', $country->name . ' deleted Successfully!');
    }


    
}
