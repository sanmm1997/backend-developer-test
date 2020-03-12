<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Client extends Model
{
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

}
