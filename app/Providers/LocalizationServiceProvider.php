<?php

namespace HelpGent\App\Providers;

use HelpGent\App\Models\Form;
use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\App\Providers\Admin\MediaProtectionNoticeProvider;
use WP_REST_Request;

class LocalizationServiceProvider implements Provider {
    public function boot() {
        add_action( 'admin_head', [ $this, 'action_admin_head' ] );
        add_filter( 'helpgent_get_forms', [$this, 'get_forms'] );
    }

    public function get_forms( array $form_data ) {
        /**
         * @var WP_REST_Request $wp_rest_request
         */
        $wp_rest_request = helpgent_singleton( WP_REST_Request::class );

        $route = ( fn() => $this->route )->call( $wp_rest_request );

        if ( "/helpgent/admin/form" !== $route ) {
            return $form_data;
        }

        $form_data['admin_total_forms'] = apply_filters( 'helpgent_admin_form_tab_total_query', Form::query( 'form' ) )->distinct()->count( 'form.id' );

        return $form_data;
    }

    public function action_admin_head() : void {
        $data                                      = helpgent_common_localizations();
        $data['supported_video_extensions']        = wp_get_video_extensions();
        $data['nginx_settings_notice_button_data'] = MediaProtectionNoticeProvider::nginx_settings_notice_button_data();
        ?>
        <script data-cfasync="false" type="text/javascript"> // Added data-cfasync to ignore Cloudflare rocket script loader cache
            var helpgent_localization = <?php helpgent_render( json_encode( $data ) );?>
        </script>
        <?php
    }
}