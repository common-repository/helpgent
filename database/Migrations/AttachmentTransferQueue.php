<?php

namespace HelpGent\Database\Migrations;

use HelpGent\WpMVC\Contracts\Migration;

class AttachmentTransferQueue implements Migration {
    public function more_than_version() {
        return '2.0.5';
    }

    public function execute(): bool {
        global $wpdb;

        $form_draft_column = $wpdb->get_results(
            $wpdb->prepare( "SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = %s AND table_name = %s AND COLUMN_NAME = 'draft'", DB_NAME, "{$wpdb->prefix}helpgent_forms" )
        );

        /**
         * Add table new columns if the column is not exists.
         */
        if ( empty( $form_draft_column ) ) {
            $wpdb->query( "ALTER TABLE {$wpdb->prefix}helpgent_forms ADD COLUMN draft LONGTEXT NULL" );

            $wpdb->query(
                "ALTER TABLE {$wpdb->prefix}helpgent_attachment_upload_sessions
                DROP COLUMN created_by,
                DROP COLUMN is_guest,
                ADD COLUMN upload_token VARCHAR(255) NOT NULL
                " 
            );

            $wpdb->query(
                "ALTER TABLE {$wpdb->prefix}helpgent_attachment_transfer_queues 
                ADD COLUMN type VARCHAR(50) NOT NULL DEFAULT 'upload' COMMENT 'possible values: migration, upload',
                ADD COLUMN transfer_from VARCHAR(191) NOT NULL,
                MODIFY COLUMN transfer_to VARCHAR(191) NOT NULL,
                ADD COLUMN upload_token VARCHAR(255) NULL,
                MODIFY COLUMN message VARCHAR(255) NULL
            " 
            );
        }

        return true;
    }
}
