<?php

namespace HelpGent\App\MediaDrivers;

use Exception;

class Local extends MediaDriverService {
    public static function get_key(): string {
        return 'local';
    }

    /**
     * @throws Exception File name is required.
     */
    public function delete( ?string $file_name, ?string $file_id = null ) : bool {

        if ( empty( $file_name ) ) {
            throw new Exception( 'File name is required', 422 );
        }

        $file_src = helpgent_upload_dir( $file_name );

        if ( ! file_exists( $file_src ) ) {
            return false;
        }

        wp_delete_file( $file_src );

        return true;
    }
}
