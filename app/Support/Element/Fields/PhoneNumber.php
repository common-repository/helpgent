<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class PhoneNumber extends Element {

    use Pagination;

    public static function get_key(): string {
        return 'phone_number';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $general_controls = $element['controls']['general'];
        $required         = $general_controls['required']['isActive'];

        $rule = '';

        if ( '1' === $required ) {
            $rule = 'required|';
        }

        $validator->validate(
            [
                $element['element_type'] => "{$rule}string|min:10|max:20",
            ]
        );

        static::throw_validator_errors( $validator );

        $value = $wp_rest_request->get_param( self::get_key() );

        $pattern = "/^([0-9\s\-\+\(\)]*)$/";

        if ( 1 !== preg_match( $pattern, $value ) ) {
            static::throw_errors(
                [
                    self::get_key() => [
                        sprintf( "The %s is invalid", self::get_key() )
                    ]
                ] 
            );
        }
    }
}