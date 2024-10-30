<?php

namespace HelpGent\App\Providers;

use Exception;
use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\App\BackgroundProcessors\MediaCleanUp\BackgroundProcessor;

class MediaCleanUpServiceProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'init_background_processor' ], 10 );
        add_action( 'init', [ $this, 'run_background_processor' ], 12 );
    }

    public function init_background_processor() {
        /**
         * @var BackgroundProcessor $background_processor
         */
        $background_processor = helpgent_singleton( BackgroundProcessor::class );
        $background_processor->init_background_processor();

        $GLOBALS['helpgent_media_clean_up_processor'] = $background_processor;
    }

    public function run_background_processor() {
        /**
         * @var BackgroundProcessor $background_processor
         */
        global $helpgent_media_clean_up_processor;

        if ( $helpgent_media_clean_up_processor::is_running() ) {
            return;
        }

        $executed_media_clean_up_processor = get_transient( 'helpgent_executed_media_clean_up_processor' );

        if ( $executed_media_clean_up_processor ) {
            return;
        }

        if ( ! ( $helpgent_media_clean_up_processor instanceof BackgroundProcessor ) ) {
            return;
        }

        try {
            $helpgent_media_clean_up_processor->run();

            $expiration = apply_filters( 'helpgent_media_transfer_processor_execution_expiration', MINUTE_IN_SECONDS * 30 );
            set_transient( 'helpgent_executed_media_clean_up_processor', true, $expiration );

        } catch ( Exception $e ) {
        }
    }
}