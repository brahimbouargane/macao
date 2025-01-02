<?php

namespace App\Sorts;

use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Sorts\Sort;

class ProductCountSort implements Sort
{
  public function __invoke(Builder $query, bool $descending, string $property)
  {

    $query->withCount('products') // Add the reference count
      ->orderBy('products_count', $descending ? 'desc' : 'asc');
  }
}
