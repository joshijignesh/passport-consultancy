@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a href={{ route('admin.states.index') }}>All States</a>
    </li>
    <li class="breadcrumb-item active">
        Edit State
    </li>
@endsection

@section('content')
    <div class="card-header">Edit State</div>
    <div class="card-body"> 
        @include('admin.includes.errors')
        <form action="{{ route('admin.states.update', $state->id) }}" method="post">
            @csrf
            @method('PUT')
            <div class="container">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control" value="{{ $state->name }}">
                </div>
                <div class="form-group">
                    <label for="country_id">Country</label>
                    <select name="country_id" id="country_id" class="form-control">
                        <option value="101">{{ App\Country::find(101)->name }}</option> 
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
      
    </div> 
@endsection

@push('scripts') 
         
@endpush