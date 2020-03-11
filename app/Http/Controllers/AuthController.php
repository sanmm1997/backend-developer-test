<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BusinessLogic\UsersBL;
use App\Http\Requests\StoreUser;

class AuthController extends Controller
{

    public function singUp(StoreUser $request) {
        return UsersBL::store($request);
    }

}
