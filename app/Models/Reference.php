<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Reference extends Model
{
    use HasFactory;

    protected $fillable = ['ref', 'weight', 'packaging', 'tc_20', 'tc_40', 'product_id'];


    //-----------Relationships--------------------------------
    public function product()
    {

        return $this->belongsTo(Product::class, 'product_id');
    }




    public static function booted()
    {
        //--------------Caching----------------
        static::created(function ($model) {
            $count = $model::count();
            $modelName = strtolower(basename(str_replace('\\', '/', get_class($model))));
            Cache::forever($modelName . '_count', $count);
        });

        static::deleted(function ($model) {
            $count = $model::count();
            $modelName = strtolower(basename(str_replace('\\', '/', get_class($model))));
            Cache::forever($modelName . '_count', $count);
        });
    }
}
