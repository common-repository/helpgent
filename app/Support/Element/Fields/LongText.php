<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class LongText extends Element {

    use Pagination;

    public static function get_key(): string {
        return 'long_text';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        self::request_validator( $wp_rest_request, $validator, $element );
    }

    public static function request_validator( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $general_controls = $element['controls']['general'];
        $required         = $general_controls['required']['isActive'];
        $max_length       = $general_controls['max_length'];

        $rules = [];

        if ( '1' === $required ) {
            $rules[] = 'required';
        }

        $rules[] = 'string';

        if ( '1' === $max_length['isActive'] ) {
            $max     = $max_length['value'];
            $rules[] = "max:{$max}";
        }

        $validator->validate(
            [
                $element['element_type'] => implode( '|', $rules ),
            ]
        );

        static::throw_validator_errors( $validator );
    }
}