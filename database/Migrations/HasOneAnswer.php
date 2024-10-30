<?php

namespace HelpGent\Database\Migrations;

use HelpGent\App\Models\ElementAnswers;
use HelpGent\WpMVC\Contracts\Migration;

class HasOneAnswer implements Migration {
    public function more_than_version() {
        return '2.0.2';
    }

    public function execute(): bool {
        global $wpdb;

        $answer_id = $wpdb->get_results(
            $wpdb->prepare( "SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = %s AND table_name = %s AND COLUMN_NAME = 'answer_id'", DB_NAME, "{$wpdb->prefix}helpgent_contact_info" )
        );

        /**
         * Add table new columns if the column is not exists.
         */
        if ( empty( $answer_id ) ) {
            $wpdb->query( "ALTER TABLE {$wpdb->prefix}helpgent_element_answers MODIFY COLUMN attachment_id BIGINT UNSIGNED NULL" );
            $wpdb->query(
                "ALTER TABLE {$wpdb->prefix}helpgent_contact_info 
            ADD COLUMN answer_id BIGINT UNSIGNED NOT NULL AFTER id,
            ADD COLUMN form_id BIGINT UNSIGNED NOT NULL AFTER answer_id,
            ADD COLUMN form_data JSON NOT NULL AFTER form_id
            "
            );
            $wpdb->query( "ALTER TABLE {$wpdb->prefix}helpgent_address ADD COLUMN answer_id BIGINT UNSIGNED NOT NULL" );
            $wpdb->query( "ALTER TABLE {$wpdb->prefix}helpgent_open_ended_text_inners ADD COLUMN answer_id BIGINT UNSIGNED NOT NULL" );
            $wpdb->query( "ALTER TABLE {$wpdb->prefix}helpgent_forms ADD COLUMN font_family VARCHAR(255) NULL" );
        }

        /**
         * Update contact info relationship and store form data
         */
        $wpdb->query(
            "UPDATE {$wpdb->prefix}helpgent_contact_info as contact 
        inner join {$wpdb->prefix}helpgent_element_answers as answer on contact.id = answer.value and answer.element_type = 'contact_info'
        left join {$wpdb->prefix}helpgent_forms as form on answer.form_id = form.id 
        left join {$wpdb->prefix}helpgent_form_meta as form_meta on form.id = form_meta.form_id and form_meta.meta_key = 'directorist' 
        set contact.answer_id = answer.id, contact.form_id = answer.form_id, contact.form_data = (SELECT GROUP_CONCAT(
            JSON_OBJECT(
                'created_by', CAST(form.created_by AS CHAR),
                'is_directorist', form_meta.meta_value
            )
        ))" 
        );

        /**
         * Remove is_directorist form contact info form data if is_directorist is null
         */
        $wpdb->query( "UPDATE {$wpdb->prefix}helpgent_contact_info set form_data = JSON_REMOVE(form_data, '$.is_directorist') where JSON_EXTRACT(form_data, '$.is_directorist') != '1'" );

        /**
         * Update address relationship
         */
        $wpdb->query(
            "UPDATE {$wpdb->prefix}helpgent_address as address 
        inner join {$wpdb->prefix}helpgent_element_answers as answer on address.id = answer.value and answer.element_type = 'address'
        set address.answer_id = answer.id" 
        );

        /**
         * Update OpenEnded text inner relationship
         */
        $wpdb->query(
            "UPDATE {$wpdb->prefix}helpgent_open_ended_text_inners as text_inner 
        inner join {$wpdb->prefix}helpgent_element_answers as answer on text_inner.id = answer.value and answer.element_type = 'open_ended_text'
        set text_inner.answer_id = answer.id" 
        );

        ElementAnswers::query()->where_in( 'element_type', ['contact_info', 'address', 'open_ended_text'] )->update(
            [
                'value' => null
            ]
        );

        ElementAnswers::query()->where( 'attachment_id', 0 )->update(
            [
                'attachment_id' => null
            ]
        );

        return true;
    }
}
