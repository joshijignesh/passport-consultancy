const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/index.js', 'public/js') 
   .copy('resources/css/app.css', 'public/css')
   .copy('resources/imgs', 'public/imgs')
   .copy('resources/fonts', 'public/fonts')
   .styles([
      'resources/admin/vendors/@coreui/icons/css/coreui-icons.min.css',
      'resources/admin/vendors/flag-icon-css/css/flag-icon.min.css',
      'resources/admin/vendors/font-awesome/css/font-awesome.min.css',
      'resources/admin/vendors/simple-line-icons/css/simple-line-icons.css',
      'resources/admin/css/style.css',
      'resources/admin/vendors/pace-progress/css/pace.min.css', 
      'datatables.net-bs4/dataTables.bootstrap4.min.css',
      'resources/admin/vendors/bootstrap-datepicker/css/bootstrap-datepicker.min.css',
      'resources/admin/css/app.css',
   ], 'public/admin/css/app.css')
   .styles('resources/css/bootstrap.min.css', 'public/css/bootstrap.min.css')
   .styles('resources/css/bootstrap.min.css.map', 'public/css/bootstrap.min.css.map')
   .styles('resources/css/now-ui-kit.css', 'public/css/now-ui-kit.css')
   .styles('resources/css/now-ui-kit.css.map', 'public/css/now-ui-kit.css.map')
   .styles('resources/css/now-ui-kit.min.css', 'public/css/now-ui-kit.min.css')
   .js('resources/admin/js/app.js','public/admin/js/app.js')
   .scripts([ 
      'resources/admin/vendors/pace-progress/js/pace.min.js',
      'resources/admin/vendors/perfect-scrollbar/js/perfect-scrollbar.min.js',
      'resources/admin/vendors/@coreui/coreui/js/coreui.min.js', 
      'resources/admin/vendors/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
      'resources/admin/js/main.js'
   ], 'public/admin/js/all.js')   
   .copy('resources/admin/imgs', 'public/admin/imgs')
   .copy('resources/admin/fonts','public/admin/fonts')
   .sourceMaps()
   .browserSync('localhost:8000');
