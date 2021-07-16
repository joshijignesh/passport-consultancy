@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item active">
        Settings
    </li>
@endsection

@section('content')
    <div class="card-header">Settings</div>
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
            <form method="POST" action="{{ route('admin.settings.update') }}">
                @csrf
                @method('PUT')
                @foreach ($settings as $setting)
                    <div class="form-group row">
                        <label class="col-sm-2" for="{{ $setting->option_name }}">{{ ucwords(join(' ', explode('_', $setting->option_name)))  }}</label>
                        <input class="form-control col-sm-8" value="{{ $setting->option_value }}" name="{{ $setting->option_name }}"/>
                    </div>
                @endforeach 
                <div class="form-group">
                    <button class="btn btn-primary">Update</button>
                </div> 
            </form>
        </div>
       
    </div> 
@endsection

@push('scripts') 
       
@endpush