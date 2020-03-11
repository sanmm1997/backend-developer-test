<?php

namespace App\AccessData;


use App\User;
use Illuminate\Database\Eloquent\Collection;

class UsersAD {

    /**
     * @param $userData
     * @return bool
     */
    public static function store($userData) {
        try {
            $user = new User();
            $user->fill($userData);
            $user->save();
            return true;
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param string $email
     * @return bool
     */
    public static function getUserByEmail(string $email) {
        try {
            return User::where(['email' => $email])->first();
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param $id
     * @return bool
     */
    public static function getUserById($id) {
        try {
            return User::find($id);
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @return User[]|bool|Collection
     */
    public static function getUsers() {
        try {
            return User::all();
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param $id
     * @param $data
     * @return bool
     */
    public static function updateUser($id, $data) {
        try {
            $user = UsersAD::getUserById($id);
            $user->fill($data);
            $user->save();
            return true;
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param $id
     * @return bool
     */
    public static function deleteUser($id) {
        try {
            $user = UsersAD::getUserById($id);
            $user->delete();
            return true;
        } catch (\Exception $exception) {
            return false;
        }
    }

}
