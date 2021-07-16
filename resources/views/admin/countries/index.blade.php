@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item active">
        All Countries
    </li>
@endsection

 

@section('content')
    <div class="card-header">Countries</div>
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
            <form action="{{ route('admin.countries.store') }}" method="POST">
                @csrf
                @method('POST')
                <div class="col-sm-12">
                    <div class="form-group input-group"> 
                        <input type="text" class="form-control" name="sortname" id="sortname" placeholder="Short Name" value="{{ old('sortname') }}" required>
                        <input type="text" class="form-control" placeholder="Name" name="name" id="name" value="{{ old('name') }}" required>
                        <div class="input-group-addon">
                            <button class="btn btn-primary" type="submit">  <i class="icon-plus"></i> Add Country</button>
                        </div>
                    </div>                     
                </div>
            </form> 
        </div> 
        {{$dataTable->table(['class' => 'table table-bordered table-hover table-condensed'])}}
    </div>  
@endsection

@push('scripts') 
        {{$dataTable->scripts()}}   
@endpush