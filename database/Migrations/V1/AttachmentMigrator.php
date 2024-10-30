<?php

namespace HelpGent\Database\Migrations\V1;

use \stdClass;
use HelpGent\App\Models\V1\Attachment as V1Attachment;
use HelpGent\App\Models\V1\Migration as V1Migration;
use HelpGent\App\Models\Attachment as V2Attachment;

class AttachmentMigrator extends MigratorBase {
    public static function migrate(): bool {
        $state_key       = V1Attachment::get_table_name();
        $old_forms_query = V1Attachment::query();

        $per_page     = 50;
        $current_page = self::get_state( $state_key, 'current_page', 1 );
        
        $results = $old_forms_query->pagination( $per_page, intval( $current_page ) );

        if ( empty( $results ) ) {
            return false;
        }

        foreach ( $results as $result ) {
            self::migrate_attachment( $result );
        }

        self::update_state( $state_key, 'current_page', $current_page + 1 );

        return true;
    }

    public static function migrate_attachment( stdClass $attachment ) {
        if ( 'server' === $attachment->storage ) {
            preg_match( "/[^.\/]+\.[0-9a-zA-Z]+$/", $attachment->url, $matches );
            
            $title     = ! empty( $matches ) ? $matches[0] : '';
            $file_path = helpgent_upload_dir( $title );
            $file_size = is_file( $file_path ) ? filesize( $file_path ) : 0;
            $file_id   = null;
        } else if ( 'google-drive' === $attachment->storage ) {
            $attachment_data = maybe_unserialize( $attachment->url );
            $title           = isset( $attachment_data['name'] ) ? $attachment_data['name'] : '';
            $file_id         = isset( $attachment_data['id'] ) ? $attachment_data['id'] : null;
            $file_size       = isset( $attachment_data['size'] ) ? $attachment_data['size'] : 0;
        }

        $new_attachment_id = V2Attachment::query()->insert_get_id(
            [
                'title'      => $title,
                'mime_type'  => $attachment->media_type,
                'file_size'  => $file_size,
                'storage'    => 'google-drive' === $attachment->storage ? 'google_drive' : 'local',
                'file_id'    => $file_id,
                'created_at' => $attachment->created_at,
            ] 
        );

        if ( empty( $new_attachment_id ) ) {
            return;
        }

        V1Migration::query()->insert(
            [
                'from_table' => V1Attachment::get_table_name(),
                'to_table'   => V2Attachment::get_table_name(),
                'old_id'     => $attachment->id,
                'new_id'     => $new_attachment_id,
            ]
        );
    }
}