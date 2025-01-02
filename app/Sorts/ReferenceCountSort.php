<?php

namespace App\Sorts;

use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Sorts\Sort;

class ReferenceCountSort implements Sort
{
  public function __invoke(Builder $query, bool $descending, string $property)
  {

    $query->withCount('references') // Add the reference count
      ->orderBy('references_count', $descending ? 'desc' : 'asc');
  }
}
