<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Application;
use Illuminate\Support\Facades\Storage;

class ApplicationController extends Controller
{
    

      
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Application $application)
    {
       
        return view('admin.applications.edit', compact('application'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Application $application)
    {  
        $application->schedule = date("Y-m-d" , strtotime($request->input('schedule')));
        $application->status = $request->input('status');
        if($request->hasFile('submitted_form')){
            $application->submitted_form  = $request->file('submitted_form')->store('applications'); 
        }

        if($request->hasFile('application_receipt')){
            $application->application_receipt = $request->file('application_receipt')->store('applications'); 
        } 
        if( $application->save()){
            return redirect(route('admin.order.index'))->with('order_status', 'Application updated Successfully');
        }else{
            return redirect()->back()->withErrors(['Something wrong with inputs. Please check end try again']);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
