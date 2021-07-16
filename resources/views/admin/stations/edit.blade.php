@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href="{{ route('admin.dashboard') }}">Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a href="{{route('admin.cities.index')}}">All Stations</a> 
    </li>
@endsection

@section('content')
    <div class="card-header">Edit station</div>
        <div class="card-body"> 
            @include('admin.includes.errors') 
            <div class="container">
                <form action="{{ route('admin.stations.update', $station->id) }}" method="POST">
                    @csrf
                    @method('PUT') 
                    <div class="form-group">
                        <label for="name"> Name</label>
                        <input type="text" class="form-control" name="name" value="{{ $station->name }}" required>
                    </div>
                    <div class="form-group">
                        <label for="city_id">City</label>
                        <select name="city_id" id="city_id" class="form-control">
                            @foreach (App\City::all() as $city)
                                <option value={{ $city->id }} {{ $city->id === $station->city->id ? 'selected' : '' }}> {{ $city->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div> 
        </div>
    </div>
@endsection
 