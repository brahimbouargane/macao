<?php

namespace App\Models;

use App\Sorts\ProductCountSort;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Ramsey\Uuid\Type\Integer;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class Brand extends Model
{

    protected $fillable = ['name'];
    protected $append = ['productsCount'];


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
            AllowedSort::custom('prod_count', new ProductCountSort()),
            ])
            ->defaultSort('-created_at')
        ;
    }


    //-----------Custom attributes--------------------------------

    public function getProductsCountAttribute()
    {
        return $this->products()->count();
    }



    //--------------Caching----------------
    public static function booted()
    {

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
