@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a href={{ route('admin.stations.index') }}>All Stations</a> 
    </li>
    <li class="breadcrumb-item active">
        {{ $city->name }}
    </li>
@endsection

@section('content')
    <div class="card-header">Police Stations of {{ $city->name }}</div>  
    <div class="card-body"> 
        @include('admin.includes.errors')
        @if (session('status'))
            <div class="alert alert-success alert-dismissible fade show">
                {{ session('status') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        @endif 
        <div class="col-sm-12">
            <form action="{{ route('admin.stations.store') }}" method="POST">
                @csrf
                @method('POST')
                <div class="form-group input-group">  
                    <select name="city_id" id="state_id" class="form-control">  
                        <option value="{{ $city->id }}">{{ $city->name }}</option> 
                    </select>
                    <input type="text" name="name" class="form-control" placeholder="Enter Station Name..." value={{ old('name') }}>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">
                            <i class="icon-plus"></i> Add Station
                        </button>
                    </div> 
                </div> 
            </form> 
        </div>
        {{$dataTable->table(['class' => 'table table-bordered table-hover table-condensed'])}}
    </div>
    </div>
@endsection

@push('scripts') 
        {{$dataTable->scripts()}} 
@endpush