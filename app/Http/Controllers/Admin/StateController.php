<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\State;
use App\Country;
use App\DataTables\StatesDataTable;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(StatesDataTable $dataTable)
    {
        return $dataTable->render('admin.states.index'); 

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
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
            'country_id' => 'exists:countries,id'
        ]);
        $state = State::create($request->all());

        return redirect(route('admin.states.index'))->with(['status' => $state->name . ' added successfully!']);
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
    public function edit(State $state)
    {
        $countries = Country::all();
        return view('admin.states.edit', compact('state', 'countries'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, State $state)
    {
        $request->validate([ 
            'name' => 'required',
            'country_id' => 'exists:countries,id'
        ]);

        $state->update($request->all());
        
        return redirect(route('admin.states.index'))->with('status', $state->name . ' updated successfully!');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(State $state)
    {
        $state->delete();
        return redirect(route('admin.states.index'))->with(['status' => $state->name . ' deleted successfully!']);
    }
}
