<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        $title = "Welcome to my Laravel website";
        $description = "Created by Jay";
        
        // Compact method
        // return view('products.index', compact('title', 'description'));

        // With method
        $data = [
            1 => 'iPhone',
            2 => 'Samsung',
            3 => 'BlackBerry'
        ];

        return view('products.index')->with('data', $data);

    }


    public function about()
    {
        return view('products.about');
    }
}
