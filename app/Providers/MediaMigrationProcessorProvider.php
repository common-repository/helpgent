<?php

namespace HelpGent\App\Providers;

use HelpGent\WpMVC\Contracts\Provider;

use HelpGent\App\BackgroundProcessors\MediaMigration\BackgroundProcessor;

class MediaMigrationProcessorProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'init_background_processor' ], 12 );
    }

    public function init_background_processor() {
        /**
         * @var BackgroundProcessor $background_processor
         */
        $background_processor = helpgent_singleton( BackgroundProcessor::class );
        $background_processor->init_background_processor();

        $GLOBALS['helpgent_media_migration_processor'] = $background_processor;
    }
}