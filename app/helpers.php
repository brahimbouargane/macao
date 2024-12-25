<?php

if (! function_exists('flashMessage')) {
    function flashMessage($type, $message): void
    {
        session()->flash('type', $type);
        session()->flash('message', $message);
    }
}


if (! function_exists('translations')) {
    function translations($json)
{
    if(!file_exists($json)) {
    return [];
    }
    return json_decode(file_get_contents($json), true);
}
}
