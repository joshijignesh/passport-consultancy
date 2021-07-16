<header class="app-header navbar">
    <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
      <img class="navbar-brand-full" src="{{ asset('imgs/passport-consultancy.svg') }}" width="110"  alt="Passport Consultancy">
      <img class="navbar-brand-minimized" src="{{ asset('imgs/passport-consultancy-icon.svg') }}" width="50"  alt="Passport Consultancy">
    </a>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item px-3">
        <a class="nav-link" href="{{ route('admin.dashboard') }}">Dashboard</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="{{ route('admin.settings.edit') }}">Settings</a>
      </li> 
    </ul>
    <ul class="nav navbar-nav ml-auto pr-4">
      
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          Hi, {{ Auth::user()->name }}
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" onclick="$('#logoutForm').submit()">
            <i class="fa fa-lock"></i> 
            Logout 
          </button>
        </div>
      </li>
    </ul> 
  </header>

  <form action="{{ route('logout') }}" method="post" id="logoutForm">
        @csrf
        @method('POST') 
    </form> 