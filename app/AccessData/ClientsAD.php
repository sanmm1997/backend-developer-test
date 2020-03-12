<?php

namespace App\AccessData;


use App\User;
use App\Client;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ClientsAD {

    /**
     * @return bool|Builder[]|Collection
     */
    public static function getClients() {
        try {
            return Client::with('user')->get();
        } catch (\Exception $exception) {
            print_r($exception->getMessage());
            return false;
        }
    }

    /**
     * @param $id
     * @return bool|Builder|Builder[]|Collection|Model
     */
    public static function getClientById($id) {
        try {
            return Client::with('user')->find($id);
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param $userData
     * @param $clienData
     * @return bool
     */
    public static function store(array $userData, array $clienData) {
        DB::beginTransaction();
        try {
            $user = new User();
            $user->fill($userData);
            $user->save();

            $client = new Client();
            $client->fill($clienData + ['user_id' => $user->id]);
            $client->save();

            DB::commit();
            return true;
        } catch (\Exception $exception) {
            DB::rollBack();
            return false;
        }
    }

    /**
     * @param $id
     * @param $clientData
     * @param $userData
     * @return bool
     */
    public static function updateClient($id, $clientData, $userData) {
        DB::beginTransaction();
        try {
            $client = Client::findOrFail($id);
            $client->fill($clientData);
            $client->save();

            $user = UsersAD::getUserById($clientData['user_id']);
            $user->fill($userData);
            $user->save();
            DB::commit();
            return true;
        } catch (\Exception $exception) {
            echo $exception->getMessage();
            echo $exception->getFile();
            DB::rollBack();
            return false;
        }
    }

    /**
     * @param $id
     * @return bool
     */
    public static function deleteClient($id) {
        DB::beginTransaction();
        try {
            $client = Client::findOrFail($id);
            $client->user->delete();
            $client->delete();
            DB::commit();
            return true;
        } catch (\Exception $exception) {
            DB::rollBack();
            return false;
        }
    }

}
