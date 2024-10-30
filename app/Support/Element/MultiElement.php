<?php

namespace HelpGent\App\Support\Element;

use HelpGent\App\DTO\ElementAnswerDTO;
use stdClass;
use WP_REST_Request;

abstract class MultiElement extends Element {
    public function save_answer( WP_REST_Request $wp_rest_request, array $element, int $response_id, stdClass $form ):bool {
        $value      = $wp_rest_request->get_param( static::get_key() );
        $element_id = $wp_rest_request->get_param( 'element_id' );
        $answer     = $this->element_answer_repository->get_by_element_first( $response_id, $element_id, $element['element_type'] );

        if ( empty( $value ) ) {
            return static::delete_answer( $this->element_answer_repository, $answer );
        }

        $form_id            = intval( $wp_rest_request->get_param( 'form_id' ) );
        $element_answer_dto = $this->get_answer_dto( $wp_rest_request->get_params(), $element, $response_id, $form_id );

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
        $dto->set_value( json_encode( map_deep( $values[static::get_key()], 'sanitize_text_field' ) ) );
        return $dto;
    }
}