<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Client extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'address'  ,
        'age',
        'telephone',
        'user_id'
    ];
    /**
     * @return BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class);
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
            $subQuery->where('age', 'like', "{$param}%");
            $subQuery->orWhere('address', 'like', "{$param}%");
            $subQuery->orWhere('telephone', 'like', "{$param}%");
        });
    }

}
