<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class ShortText extends Element {

    use Pagination;

    public static function get_key(): string {
        return 'short_text';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        LongText::request_validator( $wp_rest_request, $validator, $element );
    }
}