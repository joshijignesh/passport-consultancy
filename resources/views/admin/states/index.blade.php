@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item active">
        All States
    </li>
@endsection

@section('content')
    <div class="card-header">States</div>
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
        <div class="row justify-content-end">
            <div class="col-sm-12">
                <form action="{{ route('admin.states.store') }}" method="POST">
                    @csrf
                    @method('POST')
                    <div class="form-group input-group"> 
                        <select name="country_id" id="country_id" class="form-control"> 
                            <option value="101">{{ App\Country::find(101)->name }}</option> 
                        </select>
                        <input type="text" name="name" class="form-control" placeholder="Enter State Name..." value={{ old('name') }}>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit">
                                <i class="icon-plus"></i> Add State
                            </button>
                        </div> 
                    </div> 
                </form> 
            </div>
        </div>
        {{$dataTable->table(['class' => 'table table-bordered table-hover table-condensed'])}}
    </div> 
@endsection

@push('scripts') 
        {{$dataTable->scripts()}} 
@endpush