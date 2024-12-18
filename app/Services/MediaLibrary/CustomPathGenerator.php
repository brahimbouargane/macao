<?php

namespace App\Services\MediaLibrary;

use Illuminate\Support\Facades\Auth;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\DefaultPathGenerator;

class CustomPathGenerator extends DefaultPathGenerator
{

  protected function getBasePath(Media $media): string
  {

    return  md5($media->uuid . '_' . $media->id . "_" . config('app.key'));
  }
}
