<?php

namespace HelpGent\App\Support\Element\Fields;

use Exception;
use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class Date extends Element {

    use Pagination;

    public static function get_key(): string {
        return 'date';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $general_controls = $element['controls']['general'];
        $selected_format  = $general_controls['date_format']['value'];
        $formats          = $this->formats();

        if ( empty( $formats[$selected_format] ) ) {
            throw new Exception( esc_html__( 'Date format not found.', 'helpgent' ) );
        }

        $separator = $general_controls['separator']['value'];
        $format    = str_replace( '-', $separator, $formats[$selected_format] );
        $required  = $general_controls['required']['isActive'];

        $rule = '';

        if ( '1' === $required ) {
            $rule = 'required|';
        }

        $validator->validate(
            [
                self::get_key() => "{$rule}date:{$format}",
            ]
        );

        static::throw_validator_errors( $validator );
    }

    private function formats() {
        return [
            'en-US' => 'm-d-Y',
            'en-GB' => 'd-m-Y',
            'en-ZA' => 'Y-m-d',
        ];
    }
}