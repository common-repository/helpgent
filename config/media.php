<?php

use HelpGent\App\MediaDrivers\Local;

return apply_filters(
    'helpgent_media_config', [
        'drivers'                       => apply_filters(
            'helpgent_media_driver', [
                Local::get_key() => Local::class,
            ]
        ),
        'simple_upload_file_size_limit' => 500 * KB_IN_BYTES,
        'chunk_size'                    => 500 * KB_IN_BYTES,
    ] 
);