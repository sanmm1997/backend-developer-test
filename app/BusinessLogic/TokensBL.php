<?php


namespace App\BusinessLogic;


use App\AccessData\UsersAD;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
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

    public static function verify(Request $request) {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate())
                return self::getResponseFromProcces(false);
            return self::getResponseFromProcces(true, ['user' => $user]);
        } catch (TokenExpiredException $exception) {
            return self::getResponseFromProcces(false);
        } catch (TokenInvalidException $exception) {
            return self::getResponseFromProcces(false);
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
