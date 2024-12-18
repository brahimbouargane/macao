<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class UserData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
    public string $email,
    public ?string $avatar,
    public ?string $email_verified_at,
    public string $created_at,
    public string $updated_at,
  ) {}
}
