<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['cors'], 'prefix' => 'v1'], function () {

    /**
     * Route get JWT token
     */
    Route::post('auth/login', 'TokensController@login')->name('token.login');
    /**
     * Route create new user
     */
    Route::post('auth/singup', 'AuthController@singUp')->name('auth.singup');

    Route::group(['middleware' => ['jwt.auth']], function () {
        /**
         * Manage token
         */
        Route::post('auth/refresh', 'TokensController@refresh')->name('token.refresh');
        Route::post('auth/expire', 'TokensController@expire')->name('token.expire');

        /**
         * Routes manage crud users
         */
        Route::get('users', 'UsersController@index')->name('users.index');
        Route::get('users/{id}', 'UsersController@show')->name('users.show');
        Route::put('users/{id}', 'UsersController@update')->name('users.update');
        Route::delete('users/{id}', 'UsersController@destroy')->name('users.destroy');
    });

});
