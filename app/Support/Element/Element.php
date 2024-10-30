<?php

namespace HelpGent\App\Support\Element;

use HelpGent\App\DTO\ElementAnswerDTO;
use HelpGent\App\Exceptions\RequestValidatorException;
use HelpGent\App\Repositories\ElementAnswerRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

abstract class Element {
    abstract public static function get_key(): string;

    public ElementAnswerRepository $element_answer_repository;

    public function __construct( ElementAnswerRepository $element_answer_repository ) {
        $this->element_answer_repository = $element_answer_repository;
    }

    abstract public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element );

    abstract public function get_summary( stdClass $form, array $element, int $page = 0, int $per_page = 0 );

    public function get_answer_dto( array $values, array $element, int $response_id, int $form_id ): ElementAnswerDTO {
        $dto = new ElementAnswerDTO;
        $dto->set_response_id( $response_id );
        $dto->set_form_id( $form_id );
        $dto->set_element_id( $element['id'] );
        $dto->set_element_type( $element['element_type'] );
        $dto->set_value( $values[static::get_key()] );
        return $dto;
    }

    public function save_answer( WP_REST_Request $wp_rest_request, array $element, int $response_id, stdClass $form ): bool {
        $value = $wp_rest_request->get_param( static::get_key() );

        $element_id = $wp_rest_request->get_param( 'element_id' );
        $answer     = $this->element_answer_repository->get_by_element_first( $response_id, $element_id, $element['element_type'] );

        if ( 0 !== $value && empty( $value ) ) {
            return $this->delete_answer( $this->element_answer_repository, $answer );
        }

        $element_answer_dto = $this->get_answer_dto( $wp_rest_request->get_params(), $element, $response_id, $form->id );

        if ( $answer ) {
            $element_answer_dto->set_id( intval( $answer->id ) );
            return (bool) $this->element_answer_repository->update( $element_answer_dto );
        }
        return (bool) $this->element_answer_repository->create( $element_answer_dto );
    }

    protected static function delete_answer( ElementAnswerRepository $element_answer_repository, $answer ) {
        if ( empty( $answer ) ) {
            return false;
        }

        return $element_answer_repository->delete( $answer->id );
    }

    public static function throw_validator_errors( Validator $validator ) {
        if ( $validator->is_fail() ) {
            static::throw_errors( $validator->errors );
        }
    }

    public static function throw_errors( array $errors ) {
        throw new RequestValidatorException( "", 422, null, $errors );
    }
}