<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class Website extends Element {

    use Pagination;

    public static function get_key(): string {
        return 'website';
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
                $element['element_type'] => "{$rule}url",
            ]
        );

        static::throw_validator_errors( $validator );
    }
}