<?php

namespace App\BusinessLogic;


use App\AccessData\ClientsAD;
use App\AccessData\UsersAD;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class ClientsBL {

    /**
     *
     * Return response according if client has been stored or proccess failed
     * this trait is use in the API, for manage response with have similar structure
     *
     */
    use ResponseTrait;

    /**
     *
     * Read
     *
     *
     */
    public static function getClients(Request $request) {
        $clients = ClientsAD::getClients($request->get('param'));
        return self::getResponseFromProcces(!(is_bool($clients) && !$clients), $clients);
    }

    public static function getclient($id) {
        $client = ClientsAD::getClientById($id);
        return self::getResponseFromProcces(!empty($client), $client);
    }

    /**
     *
     * Create
     *
     *
     */
    public static function store(Request $request) {
        $user_data = $request->only('name', 'email', 'password');
        $user_data['password'] = Hash::make($user_data['password']);

        $clients_data = $request->except('name', 'email', 'password');

        $client = ClientsAD::store($user_data, $clients_data);
        return self::getResponseFromProcces($client);
    }

    /**
     *
     * Update
     *
     *
     */
    public static function updateClient(Request $request, $id) {
        $user_data = $request->only('name', 'email', 'password');
        $user_data['password'] = Hash::make($user_data['password']);

        $clients_data = $request->only('address', 'age', 'telephone', 'user_id');

        $client = ClientsAD::updateClient($id, $clients_data, $user_data);

        return self::getResponseFromProcces(boolval($client));
    }

    /**
     *
     * Delete
     *
     *
     */
    public static function deleteClient($id) {
        $client = ClientsAD::deleteClient($id);
        return self::getResponseFromProcces($client);
    }

}
