<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Setting;

class SettingController extends Controller
{
    public function edit(){
        $settings = Setting::all();
        
        return view('admin.settings.index', compact('settings'));
    }

    public function update(Request $request){
        $inputs = $request->except(['_token', '_method']);
        
        foreach ($inputs as $option_name => $option_value) {
               $setting =  Setting::where('option_name', $option_name)->get()->first();
               $setting->option_value = $option_value;
               $setting->save();
        }

        return redirect()->back()->with('status', 'Settings saved successfully!');
    }
}
