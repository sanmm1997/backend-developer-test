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
     *
     * Manage JWT token
     *
     */
    Route::post('auth/login', 'TokensController@login')->name('auth.login');

    Route::group(['middleware' => ['jwt.auth']], function () {
        Route::post('auth/refresh', 'TokensController@refresh')->name('auth.refresh');
        Route::post('auth/expire', 'TokensController@expire')->name('auth.expire');
    });

});
