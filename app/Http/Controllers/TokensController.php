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
     * @return void
     */
    public function refresh(Request $request) {

    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function expire(Request $request) {
        return UsersBL::logout($request);
    }

}
