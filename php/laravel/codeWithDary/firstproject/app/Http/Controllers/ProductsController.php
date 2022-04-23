<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        $title = "Welcome to my Laravel website";
        $description = "Created by Jay";
        return view('products.index', compact('title', 'description'));
    }


    public function about()
    {
        return view('products.about');
    }
}
