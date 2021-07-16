@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href="{{ route('admin.dashboard') }}">Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a href="{{route('admin.countries.index')}}">All Countries</a> 
    </li>
@endsection

@section('content')
    <div class="card-header">Edit country</div>
        <div class="card-body"> 
            @include('admin.includes.errors') 
            <div class="container">
                <form action="{{ route('admin.countries.update', $country->id) }}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="sortname">Short Name</label> 
                        <input type="text" class="form-control" name="sortname" value="{{ $country->sortname }}" required>
                    </div>
                    <div class="form-group">
                        <label for="name"> Name</label>
                        <input type="text" class="form-control" name="name" value="{{ $country->name }}" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div> 
        </div>
    </div>
@endsection
 