<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        $title = "Welcome to my Laravel website";
        $description = "Created by Jay";
        $data = [
            1 => 'iPhone',
            2 => 'Samsung',
            3 => 'BlackBerry'
        ];
        
        // Compact method
        // return view('products.index', compact('title', 'description'));

        // With method
        // return view('products.index')->with('data', $data);

        // Directly to the view
        return view('products.index', [
            'data' => $data
        ]);

    }


    public function about()
    {
        return view('products.about');
    }
}
