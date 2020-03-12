<?php

namespace App\BusinessLogic;


use App\AccessData\UsersAD;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UsersBL {

    /**
     *
     * Return response according if user has been stored or proccess failed
     *
     */
    use ResponseTrait;

    public static function getUsers() {
        $users = UsersAD::getUsers();
        return self::getResponseFromProcces(!$users->isEmpty(), $users);
    }

    public static function getUser($id) {
        $user = UsersAD::getUserById($id);
        return self::getResponseFromProcces(!empty($user), $user);
    }

    public static function store(Request $request) {
        $user_data = $request->all();
        $user_data['password'] = Hash::make($user_data['password']);
        $user = UsersAD::store($user_data);
        return self::getResponseFromProcces($user);
    }

    public static function updateUser(Request $request, $id) {
        $user_data = $request->all();
        $user_data['password'] = Hash::make($user_data['password']);
        $user = UsersAD::updateUser($id, $user_data);
        return self::getResponseFromProcces($user);
    }

    public static function deleteUser($id) {
        $user = UsersAD::deleteUser($id);
        return self::getResponseFromProcces($user);
    }

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
        $credentials = $request->only('email', 'password');

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails())
            return self::getResponseFromProcces(false, []);

        $token = JWTAuth::attempt($credentials);

        return self::getResponseFromProcces($token, [
            'token' => $token,
            'user' => UsersAD::getUserByEmail($credentials['email']),
            'is_admin' => ($request->get('role') === 'admin')
        ]);
    }

}
