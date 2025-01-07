<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ProductType extends Model
{

    // Allow mass assignment for these fields
    protected $fillable = [
        'name',
        "created_by",
        "last_updated_by"
    ];

    protected $append = [
        "created_by_user_name",
        "last_updated_by_user_name"
    ];



    //-----------Relationships--------------------------------

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    //-----------Custom filter function--------------------------------
    public function scopeAdvancedFilter($query)
    {
        return QueryBuilder::for($query)
            // Allow global search across multiple columns
            ->allowedFilters([
                AllowedFilter::callback('search', function (Builder $query, $value) {
                    $value = is_array($value) ?  \implode($value) : $value;
                    // Assuming you want to search across multiple fields
                    return $query->where(function ($query) use ($value) {
                        $query->where('name', 'like', "%{$value}%");
                    });
                }),
            ])
            // Allow sorting on specific columns
            ->allowedSorts([
                'id',
                'name',
                'created_at',
                'updated_at',
            ])
            ->defaultSort('-created_at')
        ;
    }


    //---------------Custom Attributes------------
    public function getCreatedByUserNameAttribute()
    {
        if (!$this->created_by) {
            return null;
        }

        $creator = User::find($this->created_by);

        return $creator ? $creator->name : null;
    }


    public function getLastUpdatedByUserNameAttribute()
    {
        if (!$this->last_updated_by) {
            return null;
        }

        $updater = User::find($this->last_updated_by);

        return $updater ?  $updater->name : null;
    }

    //--------------------------------------------








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
