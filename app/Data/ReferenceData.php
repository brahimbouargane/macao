<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ReferenceData extends Data
{
  public function __construct(
    public string $id,
    public string $ref,
    public float $weight,
    public string $packaging,
    public string $tc_20,
    public string $tc_40,
    public ?string $product_id,
    public ?string $updated_at,
    public string $created_at,
  ) {}
}
