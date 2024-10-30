<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

class Number extends Element {

    use Pagination;

    public static function get_key(): string {
        return 'number';
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
                $element['element_type'] => "{$rule}numeric",
            ]
        );

        $this->throw_validator_errors( $validator );
    }

    public function save_answer( WP_REST_Request $wp_rest_request, array $element, int $response_id, stdClass $form ):bool {
        $value      = $wp_rest_request->get_param( static::get_key() );
        $element_id = $wp_rest_request->get_param( 'element_id' );
        $answer     = $this->element_answer_repository->get_by_element_first( $response_id, $element_id, $element['element_type'] );

        if ( empty( $value ) ) {
            return static::delete_answer( $this->element_answer_repository, $answer );
        }

        $value = filter_var( $value, FILTER_VALIDATE_FLOAT );

        if ( false === $value ) {
            return false;
        }

        $form_id                   = intval( $wp_rest_request->get_param( 'form_id' ) );
        $values                    = $wp_rest_request->get_params();
        $values[static::get_key()] = $value;

        $element_answer_dto = $this->get_answer_dto( $values, $element, $response_id, $form_id );

        if ( $answer ) {
            $element_answer_dto->set_id( intval( $answer->id ) );
            return (bool) $this->element_answer_repository->update( $element_answer_dto );
        }
        return (bool) $this->element_answer_repository->create( $element_answer_dto );
    }
}