<?php

namespace HelpGent\App\Http\Controllers;

use HelpGent\App\Http\Controllers\Controller;
use HelpGent\WpMVC\Routing\Response;

class FontController extends Controller {

    /**
     * The system font name.
     */
    const SYSTEM = 'system';

    /**
     * The google font name.
     */
    const GOOGLE = 'googlefont';

    public function index() {
        return Response::send(
            [
                'fonts' => $this->get_fonts()
            ]
        );
    }

    private static function get_fonts() {
        $fonts = json_decode( file_get_contents( helpgent_dir( 'app/fonts.json' ) ), true );
        return [
            'system' => [
                'Arial'           => [],
                'Tahoma'          => [],
                'Verdana'         => [],
                'Helvetica'       => [],
                'Times New Roman' => [],
                'Trebuchet MS'    => [],
                'Georgia'         => [],
            ],
            'google' => array_map(
                function( $font ) {
                    unset( $font['files'] );
                    return $font;
                }, $fonts
            )
        ];
    }
}