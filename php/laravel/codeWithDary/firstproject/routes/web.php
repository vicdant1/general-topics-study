<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// route that sends back a view
Route::get('/products', [ProductsController::class, 'index']);
Route::get('/products/about', [ProductsController::class, 'about']);

/*

// route to users - returning a string
Route::get('/users', function(){
    return 'welcome to users page';
});


// route to users - array (JSON -> automatic cast)

Route::get('/users', function(){
    return ['PHP', 'HTML', 'Laravel'];
});

Route::get('/users', function(){
    return response()->json([
        'name' => 'Dary',
        'course' => 'Laravel beginners to advanced'
    ]);
});

Route::get('/users', function(){
    return redirect('/');
});
*/