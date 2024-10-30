<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\DTO\ElementAnswerDTO;
use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Custom;
use HelpGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class Map extends Element {

    use Custom;

    public static function get_key(): string {
        return 'map';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $general_controls = $element['controls']['general'];
        $required         = $general_controls['required']['isActive'];

        $rules = [];

        if ( '1' === $required ) {
            $rules[] = 'required';
        }

        $rules[] = 'array';

        $validator->validate(
            [
                $element['element_type'] => implode( '|', $rules ),
            ]
        );

        static::throw_validator_errors( $validator );

        $location = $wp_rest_request->get_param( static::get_key() );

        if ( empty( $location ) ) {
            return;
        }

        if ( empty( $location['lat'] ) || empty( $location['lng'] ) || 'double' !== gettype( $location['lat'] ) || 'double' !== gettype( $location['lng'] ) ) {
            static::throw_errors(
                [
                    'map' => esc_html__( "Location information is incorrect", "helpgent" )
                ] 
            );
        }
    }

    public function get_answer_dto( array $values, array $element, int $response_id, int $form_id ): ElementAnswerDTO {
        $dto = new ElementAnswerDTO;
        $dto->set_response_id( $response_id );
        $dto->set_form_id( $form_id );
        $dto->set_element_id( $element['id'] );
        $dto->set_element_type( $element['element_type'] );

        if ( isset( $values[static::get_key()] ) ) {
            $dto->set_value( json_encode( $values[static::get_key()] ) );
        }

        return $dto;
    }
}