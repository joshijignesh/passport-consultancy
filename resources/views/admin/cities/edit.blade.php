@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href="{{ route('admin.dashboard') }}">Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a href="{{route('admin.cities.index')}}">All Cities</a> 
    </li>
@endsection

@section('content')
    <div class="card-header">Edit city</div>
        <div class="card-body"> 
            @include('admin.includes.errors') 
            <div class="container">
                <form action="{{ route('admin.cities.update', $city->id) }}" method="POST">
                    @csrf
                    @method('PUT') 
                    <div class="form-group">
                        <label for="name"> Name</label>
                        <input type="text" class="form-control" name="name" value="{{ $city->name }}" required>
                    </div>
                    <div class="form-group">
                        <label for="state_id">State</label>
                        <select name="state_id" id="state_id" class="form-control">
                            @foreach (App\State::all() as $state)
                                <option value={{ $state->id }} {{ $state->id === $city->state->id ? 'selected' : '' }}> {{ $state->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div> 
        </div>
    </div>
@endsection
 