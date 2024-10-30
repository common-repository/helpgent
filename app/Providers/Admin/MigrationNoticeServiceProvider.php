<?php

namespace HelpGent\App\Providers\Admin;

use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\WpMVC\View\View;

class MigrationNoticeServiceProvider implements Provider {
    public $current_url = '';

    public function boot() {
        add_action( 'admin_notices', [ $this, 'maybe_show_migration_notices' ] );
    }

    public function maybe_show_migration_notices() {
        $this->current_url = home_url() . ! empty( $_SERVER['REQUEST_URI'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';

        $this->maybe_show_migration_approval_notice();
        $this->maybe_show_migration_status_notice();
        $this->maybe_show_notice_for_deleting_backup_data();
    }

    public function maybe_show_migration_approval_notice() {
        $show_notice = apply_filters( 'helpgent_show_admin_notice_for_migration_approval', false );

        if ( ! $show_notice ) {
            return;
        }

        $data = [ 
            'action_link' => add_query_arg( 'helpgent-execute-migration', true, $this->current_url )
        ];

        View::render( 'admin/notice/migration-approval-notice', $data );
    }
    
    public function maybe_show_migration_status_notice() {
        $show_notice = apply_filters( 'helpgent_show_admin_notice_for_migration_status', false );

        if ( ! $show_notice ) {
            return;
        }

        View::render( 'admin/notice/migration-status-notice' );
    }

    public function maybe_show_notice_for_deleting_backup_data() {
        $show_notice = apply_filters( 'helpgent_show_admin_notice_for_deleting_backup_data', false );

        if ( ! $show_notice ) {
            return;
        }

        $data = [ 
            'action_link' => add_query_arg( 'helpgent-delete-backup-data', true, $this->current_url )
        ];

        View::render( 'admin/notice/migration-old-data-removal-notice', $data );
    }
}