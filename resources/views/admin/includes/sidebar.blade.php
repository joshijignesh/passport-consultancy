<div class="sidebar">
    <nav class="sidebar-nav">
        <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.dashboard') }}">
                <i class="nav-icon icon-speedometer"></i> Dashboard 
            </a>
        </li>
        <li class="nav-title">Orders</li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.order.index') }}">
                <i class="nav-icon icons cui-basket-loaded"></i> All Orders
            </a> 
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.order.index').'?order_status=success' }}">
                <i class="nav-icon icons cui-circle-check"></i> Paid Orders
            </a> 
        </li> 
        <li class="nav-title">Location Master</li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.countries.index') }}">
                <i class="nav-icon icon-location-pin"></i> Country Master
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.states.index') }}">
                 <i class="nav-icon icons cui-map"></i> State Master
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.cities.index') }}">
                 <i class="nav-icon icons cui-map"></i> City Master
            </a>
        </li> 
    </nav>
<button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div>