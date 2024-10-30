<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Support\Element\Summary\HasOne;
use stdClass;
use WP_REST_Request;
use HelpGent\App\DTO\AddressDTO;
use HelpGent\App\DTO\ElementAnswerDTO;
use HelpGent\App\Repositories\AddressRepository;
use HelpGent\App\Support\Element\Element;
use HelpGent\WpMVC\RequestValidator\Validator;

class Address extends Element {

    use HasOne;

    /**
     * @var array $default_length
     */
    protected array $default_length = [
        'address'     => [
            'max' => 250,
            'min' => 5
        ],
        'address_two' => [
            'max' => 250,
            'min' => 5
        ],
        'city'        => [
            'max' => 50,
            'min' => 3
        ],
        'state'       => [
            'max' => 50,
            'min' => 3
        ],
        'zip_code'    => [
            'max' => 10,
            'min' => 3
        ],
        'country'     => [
            'max' => 5,
            'min' => 2
        ]
    ];

    protected bool $has_values = false;

    public static function get_key(): string {
        return 'address';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $rules = [];
        foreach ( $element['fields'] as $key => $field ) {
            if ( '1' === $field['isVisible'] ) {

                $max  = $this->default_length[$key]['max'];
                $min  = $this->default_length[$key]['min'];
                $rule = '1' === $field['isRequired'] ? 'required|' : '';

                $rules[$key] = "{$rule}string|max:{$max}|min:{$min}";
            }
        }

        $validator->validate( $rules );

        static::throw_validator_errors( $validator );
    }

    public function get_answer_dto( array $values, array $element, int $response_id, int $form_id ): ElementAnswerDTO {
        $dto = new ElementAnswerDTO();
        $dto->set_response_id( $response_id );
        $dto->set_form_id( $form_id );
        $dto->set_element_id( $element['id'] );
        $dto->set_element_type( $element['element_type'] );
        return $dto;
    }

    public function get_address_dto( array $values, array $element, int $answer_id ):AddressDTO {
        $dto = new AddressDTO();
        $dto->set_answer_id( $answer_id );

        $has_values = false;

        foreach ( $element['fields'] as $key => $field ) {
            if ( '1' !== $field['isVisible'] ) {
                continue;
            }

            if ( empty( $values[$key] ) ) {
                continue;
            }

            $setter_method = "set_{$key}";

            if ( method_exists( $dto, $setter_method ) ) {
                $dto->$setter_method( (string) $values[$key] );
                $has_values = true;
            }
        }

        $this->has_values = $has_values;

        return $dto;
    }

    public function save_answer( WP_REST_Request $wp_rest_request, array $element, int $response_id, stdClass $form ):bool {
        $address_dto = $this->get_address_dto( $wp_rest_request->get_params(), $element, 0 );

        /**
         * Get old answer
         */
        $element_id    = $wp_rest_request->get_param( 'element_id' );
        $address_table = \HelpGent\App\Models\Address::get_table_name();
        $answer        = ElementAnswers::query( "answer" )->select( "answer.id", "address.id as address_id" )->where( 'response_id', $response_id )
                    ->where( 'element_id', $element_id )->where( 'element_type', $element['element_type'] )
                    ->left_join( "{$address_table} as address", "address.answer_id", "answer.id" )->first();

        /**
         * @var AddressRepository $address_repository
         */
        $address_repository = helpgent_singleton( AddressRepository::class );

        /**
         * If address not exists then remove old submitted address
         */
        if ( ! $this->has_values ) {
            if ( $answer ) {
                return false;
            }
            $address_repository->delete( $answer->address_id );
            $this->element_answer_repository->delete( $answer->id );
            return false;
        }

        /**
         * Update address if already exists
         */
        if ( $answer ) {
            $address_dto->set_id( $answer->address_id );
            $address_dto->set_answer_id( $answer->id );
            return (bool) $address_repository->update( $address_dto );
        }

        /**
         * Create new answer
         */
        $form_id            = intval( $wp_rest_request->get_param( 'form_id' ) );
        $element_answer_dto = $this->get_answer_dto( $wp_rest_request->get_params(), $element, $response_id, $form_id );
        $answer_id          = $this->element_answer_repository->create( $element_answer_dto );

        $address_dto->set_answer_id( $answer_id );
        return (bool) $address_repository->create( $address_dto );
    }
}