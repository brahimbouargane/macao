<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class UserReferenceData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
  ) {}
}
