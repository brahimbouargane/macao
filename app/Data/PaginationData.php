<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class PaginationData extends Data
{
  public function __construct(
    public int $current_page,
    public array $data, // Dynamic array to hold different resource data
    public string $first_page_url,
    public int $from,
    public int $last_page,
    public string $last_page_url,

    #[DataCollectionOf(LinkData::class)]
    public ?DataCollection $links,

    public ?string $next_page_url,
    public string $path,
    public int $per_page,
    public ?string $prev_page_url,
    public int $to,
    public int $total
  ) {}
}


class LinkData extends Data
{
  public function __construct(
    public ?string $url,
    public string $label,
    public bool $active
  ) {}
}
