<?php

namespace App\Http\Controllers;

use App\BusinessLogic\TokensBL;
use App\Http\Requests\UserLogin;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TokensController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(UserLogin $request) {
        return TokensBL::authenticate($request);
    }

    /**
     * @param Request $request
     * @return void
     */
    public function refresh(Request $request) {

    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function expire(Request $request) {
        return TokensBL::logout($request);
    }

}
