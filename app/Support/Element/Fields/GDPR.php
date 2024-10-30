<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\DTO\ElementAnswerDTO;
use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class GDPR extends Element {

    use Pagination;

    public static function get_key(): string {
        return 'gdpr';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $validator->validate(
            [
                $element['element_type'] => "required|array",
            ]
        );

        $element_type = self::get_key();

        static::throw_validator_errors( $validator );

        $values         = $wp_rest_request->get_param( $element_type );
        $gdpr_option_id = helpgent_get_nested_value( 'controls.general.options.0.id', $element );

        if ( empty( $values[0] ) || $values[0] !== $gdpr_option_id ) {
            static::throw_errors( [$element_type => ["The {$element_type} field is required."]] );
        }
    }

    public function get_answer_dto( array $values, array $element, int $response_id, int $form_id ): ElementAnswerDTO {
        $gdpr_option_id = helpgent_get_nested_value( 'controls.general.options.0.id', $element );

        $dto = new ElementAnswerDTO;
        $dto->set_response_id( $response_id );
        $dto->set_form_id( $form_id );
        $dto->set_element_id( $element['id'] );
        $dto->set_element_type( $element['element_type'] );
        $dto->set_value( json_encode( [$gdpr_option_id] ) );
        return $dto;
    }
}