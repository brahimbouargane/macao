<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ModelsCountData extends Data
{
  public function __construct(
    public int $user,
    public int $category,
    public int $product,
    public int $brand,
    public int $type,
  ) {}
}
