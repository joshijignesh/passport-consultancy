@extends('layouts.admin')

@section('breadcrumb')
    <li class="breadcrumb-item">
        <a href={{ route('admin.dashboard') }}>Dashboard</a>
    </li>
    <li class="breadcrumb-item active">
        All Orders
    </li>
@endsection

@section('content')
    <div class="card-header">Orders</div>
    <div class="card-body"> 
        @if (session('status'))
            <div class="alert alert-success alert-dismissible fade show">
                {{ session('status') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        @endif 
        <div class="table-responsive">
            <table class="table table-bordered table-hover table-condensed">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Oreder Ref.</th>
                        <th>Amount </th>
                        <th>Payment</th>
                        <th>Time and Date</th>
                        <th>Schedule</th>
                        <th>Application Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($orders as $order)
                        <tr>
                            <td style="text-align: center">{{ $loop->iteration }}</td>
                            <td>{{ $order->name }}</td>
                            <td>{{ $order->email }}</td>
                            <td>{{ $order->payment->razorpay_order_id }}</td>
                            <td>{{ $order->order_amount }}</td>
                            <td style="text-transform:capitalize">
                                <span class="badge badge-{{ $order->order_status==='pending' ? 'warning' : 'success' }}">{{ $order->order_status }}</span>
                                
                            </td>
                            <td>{{ Carbon\Carbon::parse($order->created_at)->diffForHumans() }}</td>
                            <td>
                                {{ $order->application->schedule ? Carbon\Carbon::parse($order->application->schedule)->toFormattedDateString() : 'Not Scheduled' }}
                            </td>
                            <td>
                                {{ $order->application->status }}
                            </td>
                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div class="dropdown-menu">
                                            <a href="{{ route('admin.order.view', $order->id) }}" class="dropdown-item">View</a>
                                            <a href="{{ route('admin.order.xml', $order->id) }}" target="_blank" class="dropdown-item">XML Download</a> 
                                            <a href="{{ route('admin.application.edit', $order->application->id) }}" class="dropdown-item">Schedule</a>
                                            <form action="{{ route('admin.order.delete', $order->id) }}" method="post" id="deleteForm">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="dropdown-item">Delete</button>
                                            </form> 
                                    </div>
                                </div> 
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        {{ $orders->links() }}
    </div>
    </div>
@endsection
 