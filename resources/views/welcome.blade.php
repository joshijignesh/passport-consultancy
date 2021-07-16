<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <link rel="shortcut icon" href="{{ asset('imgs/favicon.png') }}" type="image/png">
        <title>Online Passport Application - Passport Consultancy</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css.map') }}">
        <link rel="stylesheet" href="{{ asset('css/now-ui-kit.css.map') }}">
        <link rel="stylesheet" href="{{ asset('css/now-ui-kit.min.css') }}">
        <style>
            @font-face {
                font-family: nucleoOutline;
                src: url(asset('fonts/nucleo-outline.ttf }}'));
            }

            body : {
                font-family : "nucleoOutline"
            }
        </style>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </head>
    <body>
         <div id="root"></div>
         @if(env('APP_ENV') == 'local')
         <script src="http://localhost:3000/js/index.js"></script> 
         @else
         <script src="{{ asset('js/index.js') }}"></script> 
         @endif
    </body>
</html>
