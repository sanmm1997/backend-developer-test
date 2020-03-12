<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @return mixed
     */
    public function getJWTIdentifier() {
        return $this->getKey();
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }

    /**
     * @return HasOne
     */
    public function client() {
        return $this->hasOne(Client::class);
    }

    /**
     * @param $query
     * @param $param
     * @return mixed
     */
    public function scopeSearch($query, $param) {
        if (trim($param) === "")
            return $query;

        return $query->where(function($subQuery) use ($param) {
            $subQuery->where('name', 'like', "{$param}%");
            $subQuery->orWhere('email', 'like', "{$param}%");
        });
    }

}
