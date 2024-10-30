<?php

namespace HelpGent\Database\Migrations\V1;

use Exception;
use HelpGent\WpMVC\Contracts\Migration;
use  HelpGent\Database\Migrations\CreateDB;
use HelpGent\App\BackgroundProcessors\BackgroundDBMigrationProcess;

class V1Migration implements Migration {
    protected $migration_version = '1.0.0';

    public function more_than_version() {
        return $this->migration_version;
    }

    public function execute(): bool {
        $is_done_migration = get_option( 'helpgent_is_done_migration:' . $this->migration_version, false );
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        $delete_backup_data = isset( $_GET['helpgent-delete-backup-data'] ) && ! empty( sanitize_text_field( wp_unslash( $_GET['helpgent-delete-backup-data'] ) ) );

        if ( $is_done_migration && $delete_backup_data ) {
            $this->remove_old_tables();
            return true;
        }

        if ( $is_done_migration ) {
            add_filter( 'helpgent_show_admin_notice_for_deleting_backup_data', '__return_true', 15 );
            return false;
        }

        $old_table_exists = $this->table_exists( 'helpgent_v1_conversations' );

        if ( ! $old_table_exists ) {
            return true;
        }

        add_filter( 'helpgent_show_admin_notice_for_migration_status', '__return_true', 15 );

        $this->init_migration();
        return false;
    }

    protected function init_migration(): void {
        $this->maybe_create_migration_table();

        /**
         * @var BackgroundDBMigrationProcess $background_process
         */
        $background_process = helpgent_singleton( BackgroundDBMigrationProcess::class );
        
        $background_process->action_suffix = 'v:' . $this->migration_version;
        $background_process->set_after_complete_callback( [ $this, 'after_complete' ] );

        $background_process->push_to_queue( [ $this, 'migrate' ] );
        $background_process->save()->dispatch();
    }
    
    public function migrate(): bool {
        $migrators = [
            [ SettingsMigrator::class, 'migrate' ],
            [ FormMigrator::class, 'migrate' ],
            [ GuestUserMigrator::class, 'migrate' ],
            [ AttachmentMigrator::class, 'migrate' ],
            [ ResponseMigrator::class, 'migrate' ],
            [ MessageMigrator::class, 'migrate' ],
            [ TagMigrator::class, 'migrate' ],
            [ ResponseTagMigrator::class, 'migrate' ],
        ];

        $mirator_key   = "helpgent_v:{$this->migration_version}_migrator_index";
        $mirator_index = get_option( $mirator_key, 0 );
        
        if ( -1 === $mirator_index ) {
            return false;
        }
        
        $last_mirator_index = count( $migrators ) - 1;

        if ( ! isset( $migrators[ $mirator_index ] ) ) {
            return false;
        }

        $migrator = $migrators[ $mirator_index ];

        try {
            ob_start();

            $continue      = call_user_func( $migrator );
            $error_message = ob_get_clean();

            if ( ! empty( $error_message ) ) {
                return false;
            }

            if ( $continue ) {
                return true;
            }

            if ( $mirator_index === $last_mirator_index ) {
                update_option( $mirator_key, -1 );
                return false;
            }

            update_option( $mirator_key, $mirator_index + 1 );
            return true;
        } catch ( Exception $e ) {
            return false;
        }
    }

    public function remove_old_tables(): void {
        global $wpdb;

        if ( ! function_exists( 'dbDelta' ) ) {
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        }

        $db_prefix = "{$wpdb->prefix}helpgent_v1_";

        $old_tables   = CreateDB::get_old_tables();
        $old_tables[] = 'migration';

        ob_start();

        foreach ( $old_tables as $table_name ) {
            $table_name = "{$db_prefix}{$table_name}"; 
            $sql        = "DROP TABLE $table_name;";
            // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
            $wpdb->query( $sql );
        }

        ob_get_clean();
    }

    public function maybe_create_migration_table(): void {
        if ( $this->table_exists( 'helpgent_v1_migration' ) ) {
            return;
        }

        $this->create_migration_table();
    }

    public function create_migration_table(): void {
        global $wpdb;

        $charset_collate = $wpdb->get_charset_collate();

        if ( ! function_exists( 'dbDelta' ) ) {
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        }

        $db_prefix = "{$wpdb->prefix}helpgent_";

        // -- -----------------------------------------------------
        // -- Table V1 Migration
        // -- -----------------------------------------------------
        $sql = "CREATE TABLE {$db_prefix}v1_migration (
            `from_table` VARCHAR(191) NOT NULL,
            `to_table` VARCHAR(191) NOT NULL,
            `old_id` BIGINT UNSIGNED NOT NULL,
            `new_id` BIGINT UNSIGNED NOT NULL
        ) {$charset_collate};
        ";

        dbDelta( $sql );
    }

    public function table_exists( string $table_name ): bool {
        global $wpdb;

        $table_name = "{$wpdb->prefix}{$table_name}";
        $results    = $wpdb->get_results(
            $wpdb->prepare( "SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = %s AND table_name = %s", DB_NAME, $table_name )
        );

        return ! empty( $results );
    }

    public function after_complete(): void {
        update_option( 'helpgent_is_done_migration:' . $this->migration_version, true );
    }
}
