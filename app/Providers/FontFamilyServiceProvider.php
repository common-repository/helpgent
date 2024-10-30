<?php

namespace HelpGent\App\Providers;

use HelpGent\App\BackgroundProcessors\FontFamily;
use HelpGent\App\DTO\FormDTO;
use HelpGent\App\Models\Form;
use HelpGent\WpMVC\Contracts\Provider;
use stdClass;

class FontFamilyServiceProvider implements Provider {
    public FontFamily $background_process;

    public function boot() {
        $this->background_process = new FontFamily;

        add_action( 'helpgent_after_update_form', [$this, 'after_update_form'] );
        add_action( 'helpgent_after_delete_form', [$this, 'delete_font_family'], 10, 2 );
    }

    public function after_update_form( FormDTO $form_dto ) {
        $form_content = json_decode( $form_dto->get_content(), true );

        if ( empty( $form_content['global']['font_family']['family'] ) ) {
            return;
        }

        $font_family = $form_content['global']['font_family']['family'];

        $this->download( $font_family );
    }

    public function delete_font_family( int $form_id, stdClass $form ) {
        /**
         * If the font family is empty then return or if the font is Inter then return too, Because inter is the plugin's primary font family
         */
        if ( empty( $form->font_family ) || "Inter" === $form->font_family ) {
            return;
        }

        /**
         * Checking if others forms are using the same font families
         */
        $other_forms = Form::query()->select( 1 )->where( 'font_family', $form->font_family )->first();

        if ( ! empty( $other_forms ) ) {
            return;
        }

        /**
         * Finally, Remove font family all variations
         */
        $directory = helpgent_font_family_dir( $form->font_family );

        $fonts = glob( $directory . '/*' );
        array_map( 'unlink', $fonts );
        rmdir( $directory );
    }

    public function download( string $font_family ) {
        $fonts = json_decode( file_get_contents( helpgent_dir( 'app/fonts.json' ) ), true );

        if ( empty( $fonts[$font_family]['files'] ) ) {
            return false;
        }

        $font_files = $fonts[$font_family]['files'];

        $directory = helpgent_font_family_dir();

        foreach ( $font_files as $weight => $file ) {
            $file_name = $directory . "{$font_family}/{$weight}.woff";

            if ( ! is_file( $file_name ) ) {
                $this->background_process->push_to_queue(
                    [
                        'font_family' => $font_family,
                        'type'        => 'download'
                    ] 
                )->save()->dispatch();
                break;
            }
        }
    }
}