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

        // Directly to the view
        return view('products.index', [
            'data' => $data
        ]);
    }

    public function about()
    {
        return view('products.about');
    }

    public function show($id)
    {
        $data = [
            1 => 'iPhone',
            2 => 'Samsung',
            3 => 'BlackBerry'
        ];

        return view('products.index', [
            'product' => $data[$id] ?? "Required product doesn't exists.",
            'test' => "abluble"
        ]);

        /*
            it looks like a fetch to an external api or even local database

            check if the array contains that value, if it does, return the product you just found

            if id doesn't return a generic message

            return view('products.index', [
                'product' => data[$id] ?? "required products doesn't exists",
                'abluble' => "abluble",

            ])

        */

    }
}
