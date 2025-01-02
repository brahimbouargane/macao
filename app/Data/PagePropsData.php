<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class PagePropsData extends Data
{
     /**
     * @param array<string, string> $translations
     */
    public function __construct(
        public AuthData $auth,
        public FlashMessageData $flashMessage,
        public string $locale,
        public ModelsCountData $modelsCount,
        public UserData $user,
        public string $component,
        public array $translations
    ) {}
}
