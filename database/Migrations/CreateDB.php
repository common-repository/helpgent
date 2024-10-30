<?php

namespace HelpGent\Database\Migrations;

use HelpGent\WpMVC\Contracts\Migration;

class CreateDB implements Migration {
    public $db_prefix = "";

    public function more_than_version() {
        return '1.0.0';
    }

    public function execute(): bool {
        global $wpdb;

        $charset_collate = $wpdb->get_charset_collate();

        if ( ! function_exists( 'dbDelta' ) ) {
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        }

        $this->db_prefix = "{$wpdb->prefix}helpgent_";

        if ( $this->old_table_exists() ) {
            $this->rename_old_tables();
        }

        // -- -----------------------------------------------------
        // -- Table forms
        // -- -----------------------------------------------------

        $sql = "CREATE TABLE {$this->db_prefix}forms (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `title` VARCHAR(255) NOT NULL,
            `status` VARCHAR(50) NOT NULL DEFAULT 'draft' COMMENT 'value: publish/draft',
            `content` LONGTEXT NOT NULL,
            `draft` LONGTEXT NULL,
            `font_family` VARCHAR(255) NULL,
            `is_chat_bubble` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `available_pages` JSON NULL,
            `created_by` BIGINT UNSIGNED NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table form_meta
        -- ----------------------------------------------------
        
        CREATE TABLE {$this->db_prefix}form_meta (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `meta_key` VARCHAR(255) NULL,
            `meta_value` LONGTEXT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};
        
        -- -----------------------------------------------------
        -- Table responses
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}responses (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `is_read` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `ip` VARCHAR(50) NULL,
            `created_by` BIGINT UNSIGNED NOT NULL,
            `is_guest` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `is_archive` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `is_completed` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `is_verified` TINYINT COMMENT 'value: 0/1',
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table response_meta
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}response_meta (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `response_id` BIGINT UNSIGNED NOT NULL,
            `meta_key` VARCHAR(255) NULL,
            `meta_value` LONGTEXT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table attachments
        -- -----------------------------------------------------
        CREATE TABLE {$this->db_prefix}attachments (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `title` VARCHAR(255) NULL,
            `mime_type` VARCHAR(255) NULL,
            `file_size` BIGINT UNSIGNED NOT NULL,
            `storage` VARCHAR(50) NOT NULL,
            `file_id` LONGTEXT NULL,
            `upload_token` VARCHAR(255) NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table response_attachment
        -- -----------------------------------------------------
        CREATE TABLE {$this->db_prefix}response_attachment (
            `response_id` BIGINT UNSIGNED NOT NULL,
            `attachment_id` BIGINT UNSIGNED NOT NULL
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table attachments upload session
        -- -----------------------------------------------------
        CREATE TABLE {$this->db_prefix}attachment_upload_sessions (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `title` VARCHAR(255) NOT NULL,
            `file_size` BIGINT UNSIGNED NOT NULL,
            `mime_type` VARCHAR(255) NOT NULL,
            `storage` VARCHAR(50) NOT NULL,
            `last_sent_bytes` BIGINT UNSIGNED NOT NULL DEFAULT 0,
            `ref` VARCHAR(255) NULL,
            `upload_token` VARCHAR(255) NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table attachments transfer queue
        -- -----------------------------------------------------
        CREATE TABLE {$this->db_prefix}attachment_transfer_queues (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `type` VARCHAR(50) NOT NULL DEFAULT 'upload' COMMENT 'possible values: migration, upload',
            `attachment_id` BIGINT UNSIGNED NOT NULL,
            `transfer_from` VARCHAR(191) NOT NULL,
            `transfer_to` VARCHAR(191) NOT NULL,
            `transfer_next` VARCHAR(191) NULL,
            `upload_id` BIGINT NULL,
            `upload_token` VARCHAR(255) NULL,
            `status` VARCHAR(50) NOT NULL DEFAULT 'in_queue' COMMENT 'possible values: in_queue, transferring',
            `message` VARCHAR(255) NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table element_answers
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}element_answers (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `response_id` BIGINT UNSIGNED NOT NULL,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `element_id` VARCHAR(255) NULL,
            `element_type` VARCHAR(100) NOT NULL,
            `value` LONGTEXT NULL,
            `attachment_id` BIGINT UNSIGNED NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table contact_info
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}contact_info (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `answer_id` BIGINT UNSIGNED NOT NULL,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `form_data` JSON NOT NULL,
            `first_name` VARCHAR(255) NULL,
            `last_name` VARCHAR(255) NULL,
            `email` VARCHAR(255) NULL,
            `mobile_number` VARCHAR(255) NULL,
            `company` VARCHAR(255) NULL,
            `is_lead` TINYINT NOT NULL DEFAULT 0 COMMENT 'possible values: 1, 0',
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table address
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}address (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `answer_id` BIGINT UNSIGNED NOT NULL,
            `address` LONGTEXT NULL,
            `address_two` LONGTEXT NULL,
            `city` VARCHAR(255) NULL,
            `state` VARCHAR(255) NULL,
            `zip_code` VARCHAR(255) NULL,
            `country` VARCHAR(255) NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table open_ended_text_inners
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}open_ended_text_inners (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `answer_id` BIGINT UNSIGNED NOT NULL,
            `url` VARCHAR(255) NULL,
            `phone_number` VARCHAR(255) NULL,
            `price` VARCHAR(255) NULL,
            `doc` LONGTEXT NULL,
            `file` VARCHAR(255) NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table messages
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}messages (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `response_id` BIGINT UNSIGNED NOT NULL,
            `message` LONGTEXT,
            `attachment_id` BIGINT UNSIGNED,
            `is_read` TINYINT NOT NULL DEFAULT 0 COMMENT 'possible values: 1, 0',
            `is_guest` TINYINT NOT NULL DEFAULT 0 COMMENT 'possible values: 1, 0',
            `created_by` BIGINT UNSIGNED NOT NULL,
            `replied_by` VARCHAR(50) NOT NULL,
            `parent_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
            `forward_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
            `agent_trigger` TINYINT NULL COMMENT 'null = not trigger, 0 = leave, 1 = join',
            `status` VARCHAR(50) NOT NULL DEFAULT 'publish' COMMENT 'value: publish/trash',
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table message forwards
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}message_forwards (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `message` LONGTEXT,
            `attachment_id` BIGINT UNSIGNED,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table tags
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}tags (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `title` VARCHAR(255) NULL,
            `color` VARCHAR(20) NULL,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `created_by` BIGINT UNSIGNED NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table response_tag
        -- -----------------------------------------------------
        CREATE TABLE {$this->db_prefix}response_tag (
            `tag_id` BIGINT UNSIGNED NOT NULL,
            `created_by` BIGINT UNSIGNED NOT NULL,
            `response_id` BIGINT UNSIGNED NOT NULL
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table guest_users
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}guest_users (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(255) NULL,
            `email` VARCHAR(255) NULL,
            `number` VARCHAR(255) NULL,
            `company` VARCHAR(255) NULL,
            `acceptance` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `token` VARCHAR(255) NOT NULL,
            `token_expires_at` TIMESTAMP NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table guest_user_meta
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}guest_user_meta (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `user_id` BIGINT UNSIGNED NOT NULL,
            `meta_key` VARCHAR(255) NULL,
            `meta_value` LONGTEXT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table guest_user_meta
        -- -----------------------------------------------------

        CREATE TABLE {$this->db_prefix}options (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `option_name` VARCHAR(255) NULL,
            `option_value` LONGTEXT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
        ) {$charset_collate};
        ";

        dbDelta( $sql );

        return true;
    }

    public static function get_old_tables() {
        return [
            'attachments',
            'auth_tokens',
            'conversation_members',
            'conversation_meta',
            'conversation_term_relationships',
            'form_page_relationships',
            'forms',
            'guest_user_meta',
            'guest_users',
            'message_meta',
            'messages',
            'term_taxonomy',
            'terms',
            'conversations',
        ];
    }

    protected function old_table_exists(): bool {
        return $this->table_exists( $this->db_prefix . 'conversations' );
    }

    protected function rename_old_tables() {
        global $wpdb;

        $tables = $this->get_old_tables();

        foreach ( $tables as $table_name ) {
            $old_table_name = $this->db_prefix . $table_name;

            if ( ! $this->table_exists( $old_table_name ) ) {
                continue;
            }

            $new_table_name = str_replace( 'helpgent_', 'helpgent_v1_', $old_table_name );

            $wpdb->flush();

            ob_start();

            // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
            $wpdb->query( "ALTER TABLE {$old_table_name} RENAME TO {$new_table_name}" );

            ob_get_clean();
        }
    }

    protected function table_exists( string $table_name ) {
        global $wpdb;

        $results = $wpdb->get_results(
            $wpdb->prepare( "SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = %s AND table_name = %s", DB_NAME, $table_name )
        );

        return ! empty( $results );
    }
}
