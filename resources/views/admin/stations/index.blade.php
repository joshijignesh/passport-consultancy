@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item active">
        All Police Stations
    </li>
@endsection

@section('content')
    <div class="card-header">Police Stations</div>
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
    
        {{$dataTable->table(['class' => 'table table-bordered table-hover table-condensed'])}}
    </div> 
@endsection

@push('scripts') 
        {{$dataTable->scripts()}} 
@endpush