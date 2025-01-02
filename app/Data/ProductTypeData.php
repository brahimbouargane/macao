<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ProductTypeData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
    public ?string $created_at,
    public ?string $updated_at,
  ) {}
}
