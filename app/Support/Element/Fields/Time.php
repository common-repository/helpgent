<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\Summary\Pagination;
use WP_REST_Request;
use HelpGent\App\Support\Element\Element;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\App\DTO\ElementAnswerDTO;
use stdClass;

class Time extends Element {

    use Pagination;

    public static function get_key(): string {
        return 'time';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $general_controls = $element['controls']['general'];
        $required         = $general_controls['required']['isActive'];

        $maybe_required = '';

        if ( '1' === $required ) {
            $maybe_required = 'required|';
        }

        $key = $element['element_type'];

        $validator->validate(
            [
                $key => "{$maybe_required}array",
            ]
        );

        static::throw_validator_errors( $validator );

        $time = $wp_rest_request->get_param( $key );

        if ( empty( $time ) ) {
            return;
        }

        if ( empty( $time['timezone'] ) ) {
            static::throw_errors( [ $key => [ [ "The {$key} must have timezone" ] ] ] );
        }

        if ( empty( $time['start'] ) ) {
            static::throw_errors( [ $key => [ [ "The {$key} must have start time" ] ] ] );
        }

        if ( ! $this->is_valid_timezone( $time['timezone'] ) ) {
            static::throw_errors( [ $key => [ [ "The {$key} must have valid timezone" ] ] ] );
        }

        if ( ! $this->is_valid_time_format( $time['start'] ) ) {
            static::throw_errors( [ $key => [ [ "The {$key} must have valid start time" ] ] ] );
        }

        if ( ! empty( $time['end'] ) && ! $this->is_valid_time_format( $time['end'] ) ) {
            static::throw_errors( [ $key => [ [ "The {$key} must have valid end time" ] ] ] );
        }
    }

    protected function is_valid_time_format( string $time ): bool {
        return preg_match( '/^\d{2}:\d{2}$/', $time ) === 1;
    }

    protected function is_valid_timezone( string $timezone ): bool {
        return preg_match( '/^[+-]\d{2}:\d{2}$/', $timezone ) === 1;
    }

    public function save_answer( WP_REST_Request $wp_rest_request, array $element, int $response_id, stdClass $form ): bool {
        $value = $wp_rest_request->get_param( static::get_key() );

        $element_id = $wp_rest_request->get_param( 'element_id' );
        $answer     = $this->element_answer_repository->get_by_element_first( $response_id, $element_id, $element['element_type'] );

        if ( empty( $value ) ) {
            return $this->delete_answer( $this->element_answer_repository, $answer );
        }

        $element_answer_dto = $this->get_answer_dto( $wp_rest_request->get_params(), $element, $response_id, $form->id );

        if ( $answer ) {
            $element_answer_dto->set_id( intval( $answer->id ) );
            return (bool) $this->element_answer_repository->update( $element_answer_dto );
        }
        return (bool) $this->element_answer_repository->create( $element_answer_dto );
    }

    public function get_answer_dto( array $values, array $element, int $response_id, int $form_id ): ElementAnswerDTO {
        $dto = new ElementAnswerDTO;
        $dto->set_response_id( $response_id );
        $dto->set_form_id( $form_id );
        $dto->set_element_id( $element['id'] );
        $dto->set_element_type( $element['element_type'] );
        $dto->set_value( json_encode( $values[static::get_key()] ) );
        return $dto;
    }
}