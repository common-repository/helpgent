<?php

namespace HelpGent\App\Repositories;

class SettingsRepository
{
    protected array $settings = [];

    public function save( array $settings ) {
        return update_option( 'helpgent-settings', map_deep( $settings, 'sanitize_text_field' ) );
    }

    public function get() {
        return get_option( 'helpgent-settings', [] );
    }

    public function get_by_key( string $key, $default = null ) {
        $settings = $this->get();
        return isset( $settings[$key] ) ? $settings[$key] : $default;
    }

    public function update_setting( string $key, $value ) {
        if ( is_array( $value ) ) {
            $value = map_deep( $value, 'sanitize_text_field' );
        } else {
            $value = sanitize_text_field( $value );
        }

        $key            = sanitize_text_field( $key );
        $settings       = $this->get();
        $settings[$key] = $value;

        return $this->save( $settings );
    }

    public function update_email_template_settings( string $email_template_settings ) {
        if ( ! empty( $email_template_settings ) ) {
            return update_option( 'helpgent_email_template_settings', sanitize_text_field( $email_template_settings ) );
        }
    }

    public function get_email_template_settings(): array {
        $template = get_option(
            'helpgent_email_template_settings',  [
                'header_color'  => [
                    'value' => '#000000',
                ],
                'enable_header' => [
                    'isActive' => '1',
                ], 
                'enable_footer' =>  [
                    'isActive' => '1',
                ], 
                'footer_text'   => [
                    'value' => "Build with ❤️ by wpWax"
                ]
            ] 
        );

        if ( is_string( $template ) ) {
            return json_decode( $template, true );
        }
        return $template;
    }
}
