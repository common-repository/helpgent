<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\DTO\ContactInfoDTO;
use HelpGent\App\DTO\ElementAnswerDTO;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Repositories\ContactInfoRepository;
use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\HasOne;
use HelpGent\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

class ContactInfo extends Element {

    use HasOne;

    /**
     * @var array $fields
     */
    protected array $default_length = [
        'first_name'    => [
            'max' => 250,
            'min' => 2
        ],
        'last_name'     => [
            'max' => 250,
            'min' => 2
        ],
        'email'         => [
            'max' => 50,
            'min' => 5
        ],
        'company'       => [
            'max' => 100,
            'min' => 3
        ],
        'mobile_number' => [
            'max' => 20,
            'min' => 10
        ]
    ];

    protected bool $has_values = false;

    public static function get_key(): string {
        return 'contact_info';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $rules = [];

        foreach ( $element['fields'] as $key => $field ) {

            if ( '1' !== $field['isVisible'] ) {
                continue;
            }

            $max   = $this->default_length[$key]['max'];
            $min   = $this->default_length[$key]['min'];
            $rule  = '1' === $field['isRequired'] ? 'required|' : '';
            $rule .=  'email' === $key ? 'email|' : '';

            $rules[$key] = "{$rule}string|max:{$max}|min:{$min}";
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

    public function get_contact_info_dto( array $values, array $element, int $answer_id, stdClass $form ): ContactInfoDTO {
        $is_lead = intval( helpgent_get_nested_value( "controls.general.lead_collection.isActive", $element ) );

        $dto = new ContactInfoDTO;
        $dto->set_answer_id( $answer_id );
        $dto->set_is_lead( $is_lead );
        $dto->set_form_id( $form->id );
        $dto->set_form_data( ['created_by' => $form->created_by ] );

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

        return apply_filters( 'helpgent_contact_info_dto', $dto );
    }

    public function save_answer( WP_REST_Request $wp_rest_request, array $element, int $response_id, stdClass $form ):bool {
        /**
         * Get old answer
         */
        $element_id         = $wp_rest_request->get_param( 'element_id' );
        $contact_info_table = \HelpGent\App\Models\ContactInfo::get_table_name();
        $answer             = ElementAnswers::query( "answer" )->select( "answer.id", "contact_info.id as contact_info_id" )->where( 'response_id', $response_id )
                    ->where( 'element_id', $element_id )->where( 'element_type', $element['element_type'] )
                    ->left_join( "{$contact_info_table} as contact_info", "contact_info.answer_id", "answer.id" )->first();
        
        /**
        * @var ContactInfoRepository $contact_info_repository
        */
        $contact_info_repository = helpgent_singleton( ContactInfoRepository::class );

        $contact_info_dto = $this->get_contact_info_dto( $wp_rest_request->get_params(), $element, 0, $form );
    
        if ( ! $this->has_values ) {
            if ( ! $answer ) {
                return false;
            }

            $contact_info_repository->delete( $answer->contact_info_id );
            $this->element_answer_repository->delete( $answer->id );
            return false;
        }

        /**
         * Update contact if already exists
         */
        if ( $answer ) {
            $contact_info_dto->set_id( $answer->contact_info_id );
            $contact_info_dto->set_answer_id( $answer->id );
            return (bool) $contact_info_repository->update( $contact_info_dto );
        }

        /**
         * Create new answer
         */
        $element_answer_dto = $this->get_answer_dto( $wp_rest_request->get_params(), $element, $response_id, $form->id );
        $answer_id          = $this->element_answer_repository->create( $element_answer_dto );

        $contact_info_dto->set_answer_id( $answer_id );
        return (bool) $contact_info_repository->create( $contact_info_dto );
    }
}