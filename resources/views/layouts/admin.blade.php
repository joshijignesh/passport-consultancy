<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('imgs/favicon.png') }}" type="image/png">
    <title>{{ config('app.name', 'Laravel') }} {{ __('- Admin') }}</title> 
    
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('admin/css/app.css') }}" rel="stylesheet">
    @stack('styles')
</head>
<body class="sidebar-lg-show">
      @include('admin.includes.header')
      <div class="app-body">
       @include('admin.includes.sidebar')
        <main class="main">
          <!-- Breadcrumb-->
          <ol class="breadcrumb">
            @yield('breadcrumb')  
             <!-- Breadcrumb Menu-->
            <li class="breadcrumb-menu d-md-down-none">
              <div class="btn-group" role="group" aria-label="Button group">
                  @yield('action-buttons')
              </div>
            </li>          
          </ol>
          <div class="container-fluid">
            <div class="animated fadeIn">             
              <!-- /.row-->
              <div class="card">
                 @yield('content')
              </div>
              <!-- /.card--> 
            </div>
          </div>
        </main> 
      </div>
     @include('admin.includes.footer')

    <!-- Scripts -->
    <script src="{{ asset('admin/js/app.js') }}"></script>
    <script src="{{ asset('admin/js/all.js') }}"></script>
    @stack('scripts')
</body>
</html>
