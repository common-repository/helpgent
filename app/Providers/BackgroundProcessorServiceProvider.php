<?php

namespace HelpGent\App\Providers;

use HelpGent\App\Models\User;
use HelpGent\App\Models\UserMeta;
use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\App\BackgroundProcessors\HelpgentBackgroundProcess;
use HelpGent\WpMVC\Database\Query\JoinClause;

class BackgroundProcessorServiceProvider implements Provider {
    protected HelpgentBackgroundProcess $background_processor;

    public function boot() {
        add_action( 'init', [ $this, 'action_init' ] );
    }

    /**
     * Fires after WordPress has finished loading but before any headers are sent.
     */
    public function action_init() : void {
        if ( ! wp_next_scheduled( 'helpgent_background_processor_schedule' ) ) {
            wp_schedule_event( time(), 'twicedaily', 'helpgent_background_processor_schedule' );
        }

        $this->background_processor = new HelpgentBackgroundProcess;

        add_action( 'helpgent_background_processor_schedule', [$this, 'schedule'] );
    }

    public function schedule() {
        if ( 0 !== intval( get_option( 'helpgent_is_running_background_process', 0 ) ) ) {
            return;
        }

        $items = [
            'remove_users' => [
                'user_ids' => User::query( 'user' )->select( 'user.ID as id' )->join(
                    UserMeta::get_table_name() . ' as meta', function( JoinClause $join ) {
                        $join->on_column( 'user.ID', 'meta.user_id' )->on( "meta.meta_key", "helpgent_delete_scheduled" );
                    }
                )->where( "meta.meta_value", '<', helpgent_now()->sub_days( 15 )->getTimestamp() )->get()
            ]
        ];

        if ( 1 === intval( helpgent_get_setting( 'guest_user_auto_remove' ) ) ) {
            $items[ 'remove_guest_users' ] = [];
        }

        $hours = intval( helpgent_get_setting( 'remove_unverified_response_after_hours', 48 ) );

        if ( 0 < $hours ) {
            $items['remove_unverified_response'] = [
                'created_at' =>  helpgent_now()->setTimestamp( time() - ( HOUR_IN_SECONDS * $hours ) )->format( helpgent_date_time_format() )
            ];
        }

        $attachment = helpgent_get_setting( 'attachment_auto_remove', '0' );

        if ( '1' === $attachment ) {

            $schedule_days = intval( helpgent_get_setting( 'attachment_remove_after_days', 30 ) );

            $items['unknown_attachment'] = [
                'created_at' => helpgent_now()->sub_days( 1 )->format( helpgent_date_time_format() )
            ];

            $items['expired_attachment'] = [
                'expired_date' =>  helpgent_now()->sub_days( $schedule_days )->format( helpgent_date_time_format() )
            ];
        }

        /**
         * @var FontFamilyServiceProvider $font_family
         */
        $font_family = helpgent_singleton( FontFamilyServiceProvider::class );
        $font_family->download( "Inter" );

        if ( ! empty( $items ) ) {
            $this->background_processor->push_to_queue( $items )->save()->dispatch();
            update_option( 'helpgent_is_running_background_process', 1 );
        }
    }
}