<?php


namespace App\BusinessLogic;


use App\AccessData\UsersAD;
use App\Traits\ResponseTrait;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class TokensBL
{
    use ResponseTrait;

    public static function logout(Request $request) {
        try {
            $token = JWTAuth::getToken();
            JWTAuth::invalidate($token);
            return self::getResponseFromProcces(true);
        } catch (JWTException $exception) {
            return self::getResponseFromProcces(false);
        }
    }

    public static function authenticate(Request $request) {
        try {
            if (!UsersAD::authenticateUser($request->only('email', 'password')))
                throw new \Exception('User not found');

            $user = UsersAD::getUserByEmail($request->get('email'));
            $token = JWTAuth::fromUser($user);

            return self::getResponseFromProcces($token, [
                'token' => $token,
                'user' => $user,
                'is_admin' => ($request->get('role') === 'admin')
            ]);
        } catch (\Exception $exception) {
            return self::getResponseFromProcces(false);
        }
    }

}
