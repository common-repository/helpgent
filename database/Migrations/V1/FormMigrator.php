<?php

namespace HelpGent\Database\Migrations\V1;

use \stdClass;
use HelpGent\App\Models\V1\Form as V1Form;
use HelpGent\App\Models\V1\Migration as V1Migration;
use HelpGent\App\Models\Form as V2Form;
use HelpGent\App\Models\FormMeta as V2FormMeta;

class FormMigrator extends MigratorBase {
    public static function migrate(): bool {
        self::maybe_create_lagacy_form();

        $state_key       = V1Form::get_table_name();
        $old_forms_query = V1Form::query( 'form' )
            ->select( ['form.*', 'GROUP_CONCAT( helpgent_v1_form_page_relationships.page_id ) as pages'] )
            ->left_join( 'helpgent_v1_form_page_relationships', 'form.id', '=', 'helpgent_v1_form_page_relationships.form_id' )
            ->group_by( 'form.id' );

        $current_page = self::get_state( $state_key, 'current_page', 1 );
        $results      = $old_forms_query->pagination( 20, intval( $current_page ) );

        if ( empty( $results ) ) {
            return false;
        }

        $settings = get_option( '_helpgent_options', [] );

        foreach ( $results as $result ) {
            self::migrate_form( $result, $settings );
        }

        self::update_state( $state_key, 'current_page', $current_page + 1 );

        return true;
    }

    protected static function migrate_form( stdClass $form_data, array $settings ) {
        $options = json_decode( $form_data->options, true );

        $new_form_content = file_get_contents( __DIR__ . '/data/default-form-content.json' );
        $new_form_content = json_decode( $new_form_content, true );

        $end_screen             = $new_form_content['elements'][0];
        $user_validation_screen = $new_form_content['elements'][1];
        $open_ended_screen      = $new_form_content['elements'][2];

        $font_sizes = [
            '.80'  => '15',
            '.915' => '17',
            '1'    => '18',
            '1.3'  => '24',
            '2'    => '24',
        ];

        // Global Data
        $new_form_content['global']['anonymous_submission']['isActive'] = ! empty( $settings['guestSubmission'] ) ? '1' : '0';

        $enabled_email_notificaton = ! empty( $settings['enableEmailNotification'] ) ? '1' : '0';

        $new_form_content['global']['email_notification']['admin_notification']['notify_on_new_response']['isActive'] = $enabled_email_notificaton;
        $new_form_content['global']['email_notification']['admin_notification']['notify_on_user_message']['isActive'] = $enabled_email_notificaton;
        $new_form_content['global']['email_notification']['user_notification']['notify_on_new_response']['isActive']  = $enabled_email_notificaton;
        $new_form_content['global']['email_notification']['user_notification']['notify_on_admin_message']['isActive'] = $enabled_email_notificaton;

        if ( isset( $settings['chatHeadPosition'] ) ) {
            $chat_head_position     = $settings['chatHeadPosition'];
            $chat_head_position_map = [
                'bottom-right'  => 'right',
                'bottom-middle' => 'right',
                'bottom-left'   => 'left',
            ];

            $chat_head_position = isset( $chat_head_position_map[ $chat_head_position ] ) ? $chat_head_position_map[ $chat_head_position ] : 'right';
            
            $new_form_content['global']['bubble']['position'] = $chat_head_position;
        }

        if ( isset( $settings['maxVideoLength'] ) ) {
            $new_form_content['global']['media']['max_video_duration']['value'] = (string) $settings['maxVideoLength'];
        }

        if ( isset( $settings['maxVoiceLength'] ) ) {
            $new_form_content['global']['media']['max_voice_duration']['value'] = (string) $settings['maxVoiceLength'];
        }

        if ( isset( $settings['videoQuality'] ) ) {
            $new_form_content['global']['media']['video_resolution']['value'] = (string) $settings['videoQuality'];
        }

        if ( isset( $settings['maxUploadSize'] ) ) {
            $new_form_content['global']['media']['max_upload_size']['value'] = $settings['maxUploadSize'];
        }

        if ( isset( $options['creditTextVisibility'] ) ) {
            $open_ended_screen['global']['helpgent_branding']['isActive'] = ! empty( $options['creditTextVisibility'] ) ? '1' : '0';
        }

        // Common Data
        if ( ! empty( $options['primary_button_font_color'] ) ) {
            $end_screen['controls']['fieldDesign']['buttonStyle']['btn_text_color']['value']        = $options['primary_button_font_color'];
            $open_ended_screen['controls']['fieldDesign']['buttonStyle']['btn_text_color']['value'] = $options['primary_button_font_color'];
        }

        if ( ! empty( $options['primary_button_background_color'] ) ) {
            $end_screen['controls']['fieldDesign']['buttonStyle']['btn_color']['value']        = $options['primary_button_background_color'];
            $open_ended_screen['controls']['fieldDesign']['buttonStyle']['btn_color']['value'] = $options['primary_button_background_color'];
        }

        if ( ! empty( $options['button_border_radius'] ) ) {
            $end_screen['controls']['fieldDesign']['buttonStyle']['btn_radius']['value']        = $options['button_border_radius'];
            $open_ended_screen['controls']['fieldDesign']['buttonStyle']['btn_radius']['value'] = $options['button_border_radius'];
        }

        $user_validation_screen['media'] = [];
        $open_ended_screen['media']      = [];

        if ( ! empty( $options['greet_image_url'] ) || ! empty( $options['greet_video_url'] ) ) {
            $type = ! empty( $options['greet_image_url'] ) ? 'image' : 'video';
            $url  = ! empty( $options['greet_image_url'] ) ? $options['greet_image_url'] : $options['greet_video_url'];
            
            $user_validation_screen['media'] = [
                "type" => $type,
                "url"  => $url,
            ];

            $open_ended_screen['media'] = [
                "type" => $type,
                "url"  => $url,
            ];

            $new_form_content['global']['bubble']['background_type']['upload'] = [
                "label" => $open_ended_screen['title'],
                "value" =>  $open_ended_screen['id'],
                "icon"  => "openEnded",
                "type"  => "open_ended",
                "media" => [
                    "type" => $type,
                    "url"  => $url
                ]
            ];
        }

        // Open Ended Screen Data
        $open_ended_screen['layout'] = 'theme-2' === $options['theme'] ? 'mediaLeft' : 'openEndedDefault';

        if ( ! empty( $options['greet_message'] ) ) {
            $open_ended_screen['title'] = $options['greet_message'];
        }

        if ( ! empty( $options['description'] ) ) {
            $open_ended_screen['controls']['general']['description']['value'] = $options['description'];
        }

        if ( ! empty( $options['chat_options_title'] ) ) {
            $open_ended_screen['controls']['general']['chat_title']['value'] = $options['chat_options_title'];
        }

        if ( ! empty( $options['can_replay_in'] ) ) {
            $reply_methods = $open_ended_screen['controls']['general']['reply_methods'];

            $reply_methods_map = [
                'video'         => 'video',
                'voice'         => 'voice',
                'text'          => 'text',
                'screen_record' => 'screen',
            ];

            foreach ( $options['can_replay_in'] as $key ) {
                if ( ! isset( $reply_methods_map[ $key ] ) ) {
                    continue;
                }

                $key = $reply_methods_map[ $key ];

                $reply_methods[ $key ] = [ 'isActive' => '1' ];
            }

            $open_ended_screen['controls']['general']['reply_methods'] = $reply_methods;
        }

        if ( ! empty( $options['textFormFields'] ) ) {
            $text_fields = $open_ended_screen['controls']['general']['text_fields'];

            $text_fields_map = [
                'wpwax-vm-url'    => 'url',
                'wpwax-vm-number' => 'phone_number',
                'wpwax-vm-quotes' => 'price',
                'wpwax-vm-note'   => 'doc',
                'wpwax-vm-upload' => 'file',
            ];

            foreach ( $options['textFormFields'] as $field_item ) {
                $field_name = $field_item['name'];

                if ( ! isset( $text_fields_map[ $field_name ] ) ) {
                    continue;
                }

                $field_key = $text_fields_map[ $field_name ];

                $text_fields[ $field_key ]['label']      = $field_item['placeholder'];
                $text_fields[ $field_key ]['isRequired'] = ! empty( $field_item['required'] ) ? '1' : '0';
                $text_fields[ $field_key ]['isVisible']  = ! empty( $field_item['visible'] ) ? '1' : '0';
            }

            $open_ended_screen['controls']['general']['text_fields'] = $text_fields;
        }

        if ( ! empty( $options['footer_message'] ) ) {
            $open_ended_screen['controls']['general']['footer_message']['value'] = $options['footer_message'];
        }

        if ( ! empty( $options['greet_message_font_color'] ) ) {
            $open_ended_screen['controls']['fieldDesign']['labelStyle']['text_color']['value'] = $options['greet_message_font_color'];
        }

        if ( isset( $options['greet_message_font_size'] ) && isset( $font_sizes[ $options['greet_message_font_size'] ] ) ) {
            $open_ended_screen['controls']['fieldDesign']['labelStyle']['font_size']['value'] = $font_sizes[ $options['greet_message_font_size'] ];
        }

        if ( isset( $options['chat_options_title_font_size'] ) && isset( $font_sizes[ $options['chat_options_title_font_size'] ] ) ) {
            $open_ended_screen['controls']['fieldDesign']['chatTitleStyle']['font_size']['value'] = $font_sizes[ $options['chat_options_title_font_size'] ];
        }

        if ( ! empty( $options['chat_options_title_font_color'] ) ) {
            $open_ended_screen['controls']['fieldDesign']['chatTitleStyle']['text_color']['value'] = $options['chat_options_title_font_color'];
        }

        if ( ! empty( $options['footer_message_color'] ) ) {
            $open_ended_screen['controls']['fieldDesign']['footerTextStyle']['text_color']['value'] = $options['footer_message_color'];
        }

        if ( isset( $options['footer_message_font_size'] ) && isset( $font_sizes[ $options['footer_message_font_size'] ] ) ) {
            $open_ended_screen['controls']['fieldDesign']['footerTextStyle']['font_size']['value'] = $font_sizes[ $options['footer_message_font_size'] ];
        }

        if ( ! empty( $options['footer_message_color'] ) ) {
            $open_ended_screen['controls']['fieldDesign']['footerTextStyle']['text_color']['value'] = $options['footer_message_color'];
        }

        // End Screen Data
        if ( ! empty( $options['thank_page_title'] ) ) {
            $end_screen['title'] = $options['thank_page_title'];
        }

        if ( ! empty( $options['thank_page_description'] ) ) {
            $end_screen['controls']['general']['description']['value'] = $options['thank_page_description'];
        }

        if ( isset( $options['thank_page_title_color'] ) ) {
            $end_screen['controls']['fieldDesign']['labelStyle']['text_color']['value'] = $options['thank_page_title_color'];
        }

        if ( isset( $options['thank_page_title_font_size'] ) && isset( $font_sizes[ $options['thank_page_title_font_size'] ] ) ) {
            $end_screen['controls']['fieldDesign']['labelStyle']['font_size']['value'] = $font_sizes[ $options['thank_page_title_font_size'] ];
        }

        if ( isset( $options['thank_page_description_color'] ) ) {
            $end_screen['controls']['fieldDesign']['descriptionStyle']['text_color']['value'] = $options['thank_page_description_color'];
        }

        if ( isset( $options['thank_page_description_font_size'] ) && isset( $font_sizes[ $options['thank_page_description_font_size'] ] ) ) {
            $end_screen['controls']['fieldDesign']['descriptionStyle']['font_size']['value'] = $font_sizes[ $options['thank_page_description_font_size'] ];
        }

        if ( isset( $options['show_thank_page_cta_button'] ) ) {
            $end_screen['controls']['externalButton']['isActive'] = ! empty( $options['show_thank_page_cta_button'] ) ? '1' : '0';
        }

        if ( isset( $options['thank_page_cta_button_text'] ) ) {
            $end_screen['controls']['externalButton']['btn_text'] = $options['thank_page_cta_button_text'];
        }

        if ( isset( $options['thank_page_cta_button_url'] ) ) {
            $end_screen['controls']['externalButton']['btn_url'] = $options['thank_page_cta_button_url'];
        }

        $new_form_content['elements'][0] = $end_screen;
        $new_form_content['elements'][1] = $user_validation_screen;
        $new_form_content['elements'][2] = $open_ended_screen;

        $available_pages = ! empty( $form_data->pages ) ? array_unique( explode( ',', $form_data->pages ) ) : [];

        $new_form_id = V2Form::query()->insert_get_id(
            [
                'title'           => $form_data->name,
                'status'          => 'publish' === $form_data->status ? 'publish' : 'draft',
                'content'         => json_encode( $new_form_content ),
                'is_chat_bubble'  => $available_pages ? 1 : 0,
                'available_pages' => wp_json_encode( $available_pages ),
                'created_by'      => $form_data->author === 'admin' ? self::get_admin_user_id() : $form_data->author,
                'created_at'      => helpgent_now(),
            ] 
        );

        if ( empty( $new_form_id ) ) {
            return;
        }

        V1Migration::query()->insert(
            [
                'from_table' => V1Form::get_table_name(),
                'to_table'   => V2Form::get_table_name(),
                'old_id'     => $form_data->id,
                'new_id'     => $new_form_id,
            ]
        );

        $new_form_meta_data = [
            [
                'meta_key'   => 'color',
                'meta_value' => 'rgb( ' . rand( 0, 255 ) . ', ' . rand( 0, 255 ) . ', ' . rand( 0, 255 ) . ' )',
            ],
        ];

        if ( $form_data->author !== 'admin' ) {
            $new_form_meta_data[] = [
                'meta_key'   => 'directorist',
                'meta_value' => 1,
            ];
        }

        foreach ( $new_form_meta_data as $meta_data ) {
            $meta_data['form_id'] = $new_form_id;
            V2FormMeta::query()->insert( $meta_data );
        }
    }

    public static function maybe_create_lagacy_form(): void {
        if ( ! empty( get_option( 'helpgent_legacy_form', 0 ) ) ) {
            return;
        }

        self::create_lagacy_form();
    }

    public static function create_lagacy_form(): void {
        $new_form_content = file_get_contents( __DIR__ . '/data/default-form-content.json' );
        $new_form_content = json_decode( $new_form_content, true );

        $new_form_id = V2Form::query()->insert_get_id(
            [
                'title'           => 'Legacy Conversations',
                'status'          => 'draft',
                'content'         => json_encode( $new_form_content ),
                'is_chat_bubble'  => 0,
                'available_pages' => '[]',
                'created_by'      => self::get_admin_user_id(),
                'created_at'      => helpgent_now(),
            ] 
        );

        if ( empty( $new_form_id ) ) {
            return;
        }

        $new_form_meta_data = [
            [
                'meta_key'   => 'color',
                'meta_value' => 'rgb( ' . rand( 0, 255 ) . ', ' . rand( 0, 255 ) . ', ' . rand( 0, 255 ) . ' )',
            ],
        ];

        foreach ( $new_form_meta_data as $meta_data ) {
            $meta_data['form_id'] = $new_form_id;
            V2FormMeta::query()->insert( $meta_data );
        }

        update_option( 'helpgent_legacy_form', $new_form_id );
    }
}