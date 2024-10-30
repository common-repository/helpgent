<?php

namespace HelpGent\Database\Migrations\V1;

class SettingsMigrator extends MigratorBase {
    public static function migrate(): bool {
        $old_options = get_option( '_helpgent_options', [] );

        if ( empty( $old_options ) ) {
            return false;
        }

        if ( ! empty( $old_options['userDashboardPage'] ) ) {
            helpgent_update_setting( 'user_dashboard_page',  $old_options['userDashboardPage'] );
        }

        if ( isset( $old_options['attatchmentDeletionAfter'] ) ) {
            helpgent_update_setting( 'attachment_remove_after_days',  $old_options['attatchmentDeletionAfter'] );
        }

        if ( ! empty( $old_options['googleDriveIntegration'] ) ) {
            helpgent_update_setting( 'active_media_driver', 'google_drive' );
        }

        if ( ! empty( $old_options['googleAccessToken'] ) && ! empty( $old_options['googleRefreshToken'] ) ) {
            helpgent_update_setting(
                'google_drive',  [
                    'accessToken'  => $old_options['googleAccessToken'],
                    'refreshToken' => $old_options['googleRefreshToken'],
                ] 
            );
        }

        if ( ! empty( $old_options['helpgent_license'] ) ) {
            helpgent_update_setting( 'license_key',  $old_options['helpgent_license'] );
        }

        return false;
    }
}