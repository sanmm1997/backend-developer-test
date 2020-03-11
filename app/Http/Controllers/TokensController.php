<?php

namespace App\Http\Controllers;

use App\BusinessLogic\UsersBL;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TokensController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request) {
        return UsersBL::authenticate($request);
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
