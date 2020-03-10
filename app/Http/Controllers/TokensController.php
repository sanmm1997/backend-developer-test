<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TokensController extends Controller
{

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request) {

        return response()->json([
            'hello' => 'world'
        ]);
    }

    /**
     * @param Request $request
     */
    public function logout(Request $request) {

    }

    /**
     * @param Request $request
     */
    public function expire(Request $request) {

    }

}
