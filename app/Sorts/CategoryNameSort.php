<?php

namespace App\Sorts;

use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Sorts\Sort;

class CategoryNameSort implements Sort
{
  public function __invoke(Builder $query, bool $descending, string $property)
  {
    $query->join('categories', 'products.category_id', '=', 'categories.id')
      ->select('products.*') // Ensure only product columns are selected
      ->distinct() // Use DISTINCT to avoid duplicates
      ->orderBy('categories.name', $descending ? 'desc' : 'asc');
  }
}
