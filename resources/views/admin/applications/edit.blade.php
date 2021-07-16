@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item">
        <a href={{ route('admin.order.index') }}>Orders</a>
    </li>
    <li class="breadcrumb-item active">
       Update Application
    </li>
@endsection

@section('content')
    <div class="card-header">Update Application</div>
    <div class="card-body"> 
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <form action="{{ route('admin.application.update', $application->id)}}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="schedule">Schedule</label>
                        <input type="text" name="schedule" class="form-control" id="date" value="{{ $application->schedule }}">
                    </div>
                    <div class="form-group">
                        <label for="status">Status</label>
                        <input type="text" name="status" class="form-control"  value="{{ $application->status }}">
                    </div>
                    <div class="form-group">
                        <label for="submitted_form">Submmitted Form</label>
                        <input type="file" name="submitted_form" class="form-control"> 
                        @if ( $application->submitted_form)
                         <a href="{{ route('admin.storage.file', $application->submitted_form) }}" target="_blank">View</a>
                        @endif
                      
                    </div>
                    <div class="form-group">
                        <label for="application_receipt">Application Receipt</label>
                        <input type="file" name="application_receipt" class="form-control">
                        @if ($application->application_receipt)
                            <a href="{{ route('admin.storage.file', $application->application_receipt) }}" target="_blank">View</a>
                        @endif
                       
   
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form> 
            </div>
        </div> 
    </div>
    </div>
@endsection
 
@push('scripts')
  <script>
    $('#date').datepicker({
        clearBtn: true,
        format: 'yyyy-m-d'
    });
  </script>
@endpush