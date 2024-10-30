<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\DTO\OpenEndedTextInnerDTO;
use HelpGent\App\DTO\ElementAnswerDTO;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Repositories\OpenEndedTextInnerRepository;
use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

class OpenEnded extends Element {

    use Pagination;

    /**
     * @var array $default_length
     */
    protected array $default_length = [
        'url'          => [
            'max' => 250,
            'min' => 5
        ],
        'price'        => [
            'max' => 50,
            'min' => 1
        ],
        'doc'          => [
            'max' => 500,
            'min' => 10
        ],
        'phone_number' => [
            'max' => 20,
            'min' => 10
        ],
        'file'         => [
            'max' => 999999999999999999,
            'min' => 1
        ]
    ];

    protected bool $has_values = false;

    public static function get_key(): string {
        return 'open_ended';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $validator->validate(
            [
                self::get_key() . "_type" => "required|accepted:video,voice,text,screen",
            ]
        );

        static::throw_validator_errors( $validator );

        $open_ended_type = $wp_rest_request->get_param( self::get_key() . "_type" );

        /**
         * Video, Voice, Screen Record validation
         */
        if ( "text" !== $open_ended_type ) {
            $validator->validate(
                [
                    self::get_key() => "required|integer",
                ]
            );

            static::throw_validator_errors( $validator );
            return;
        }

        /**
         * Text inner inputs validations
         */
        $fields = helpgent_get_nested_value( 'controls.general.text_fields', $element );

        $validation_rules = [];
    
        /**
         * Generating dynamic validation rules
         */
        foreach ( $fields as $key => $field ) {

            if ( '1' !== $field['isVisible'] ) {
                continue;
            }

            $rules = [];

            $is_required = '1' === $field['isRequired'];
            $min         = $this->default_length[$key]['min'];

            if ( $is_required ) {
                $rules[] = 'required';
            }

            if ( 'file' === $key ) {
                $rules[] = 'integer';
                $min     = $is_required ? 1 : 0;
            } else {
                $rules[] = 'string';
            }

            if ( 'url' === $key ) {
                $rules[] = 'url';
            }

            $rules[] = "max:{$this->default_length[$key]['max']}";
            $rules[] = "min:{$min}";

            $validation_rules[$key] = implode( '|', $rules );
        }

        $validator->validate( $validation_rules );

        static::throw_validator_errors( $validator );
    }

    public function save_answer( WP_REST_Request $wp_rest_request, array $element, int $response_id, stdClass $form ):bool {
        $element_id      = $wp_rest_request->get_param( 'element_id' );
        $open_ended_type = $wp_rest_request->get_param( self::get_key() . "_type" );

        $text_inner_table = \HelpGent\App\Models\OpenEndedTextInner::get_table_name();
        $answer           = ElementAnswers::query( "answer" )->where( 'response_id', $response_id )
                        ->select( "answer.id", "answer.element_type", "text_inner.id as text_inner_id" )
                        ->where( 'element_id', $element_id )->where( 'element_type', 'like', "%{$element['element_type']}%" )
                        ->left_join( "{$text_inner_table} as text_inner", "text_inner.answer_id", "answer.id" )->first();
        /**
         * @var OpenEndedTextInnerRepository $text_inner_repository
         */
        $text_inner_repository = helpgent_singleton( OpenEndedTextInnerRepository::class );

        if ( "text" === $open_ended_type ) {
            return $this->save_text_fields( $answer, $wp_rest_request, $element, $response_id );
        }

        /**
         * Removed old values if current value is empty
         */
        if ( empty( $wp_rest_request->get_param( self::get_key() ) ) ) {
            return $this->delete( $answer, $text_inner_repository );
        }

        $form_id            = intval( $wp_rest_request->get_param( 'form_id' ) );
        $element_answer_dto = $this->get_answer_dto( $wp_rest_request->get_params(), $element, $response_id, $form_id );

        /**
         * Create element answer if answer not exist.
         */
        if ( empty( $answer ) ) {
            return (bool) $this->element_answer_repository->create( $element_answer_dto );
        }

        /**
         * If answer already exists then updating it.
         */
        if ( 'open_ended_text' === $answer->element_type ) {
            $text_inner_repository->delete( $answer->text_inner_id );
        }

        $element_answer_dto->set_id( $answer->id );
        return (bool) $this->element_answer_repository->update( $element_answer_dto );
    }

    protected function save_text_fields( $answer, WP_REST_Request $wp_rest_request, array $element, int $response_id ) {
        $text_inner_dto = $this->get_text_inner_dto( $wp_rest_request->get_params(), $element, 0 );

        /**
         * @var OpenEndedTextInnerRepository $text_inner_repository
         */
        $text_inner_repository = helpgent_singleton( OpenEndedTextInnerRepository::class );

        /**
         * Removed old values if current value is empty.
         */
        if ( ! $this->has_values ) {
            return $this->delete( $answer, $text_inner_repository );
        }

        $form_id            = intval( $wp_rest_request->get_param( 'form_id' ) );
        $element_answer_dto = $this->get_answer_dto( $wp_rest_request->get_params(), $element, $response_id, $form_id );

        /**
         * If answer not exists create answer.
         */
        if ( empty( $answer ) ) {
            $answer_id = $this->element_answer_repository->create( $element_answer_dto );
            $text_inner_dto->set_answer_id( $answer_id );
            return (bool) $text_inner_repository->create( $text_inner_dto );
        }

        /**
         * If existing answer type in type then only update old answer.
         */
        if ( 'open_ended_text' === $answer->element_type ) {
            $text_inner_dto->set_id( $answer->text_inner_id );
            $text_inner_dto->set_answer_id( $answer->id );
            return (bool) $text_inner_repository->update( $text_inner_dto );
        }

        /**
         * Create new text answer, because old answer type in not text.
         */
        $text_inner_dto->set_answer_id( $answer->id );
        $text_inner_repository->create( $text_inner_dto );

        /**
         * Update element answer to remove attachment id.
         */
        $element_answer_dto->set_id( $answer->id );
        return $this->element_answer_repository->update( $element_answer_dto );
    }

    public function get_text_inner_dto( array $values, array $element, int $answer_id ) {
        $fields = helpgent_get_nested_value( 'controls.general.text_fields', $element );
        $dto    = new OpenEndedTextInnerDTO;
        $dto->set_answer_id( $answer_id );

        $has_values = false;

        foreach ( $fields as $key => $field ) {
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

    public function get_answer_dto( array $values, array $element, int $response_id, int $form_id ): ElementAnswerDTO {
        $dto = new ElementAnswerDTO();
        
        $open_ended_type_key = self::get_key() . "_type";
        $open_ended_type     = $values[$open_ended_type_key];

        if ( 'text' !== $open_ended_type ) {
            $dto->set_attachment_id( intval( $values[static::get_key()] ) );
        }

        $dto->set_response_id( $response_id );
        $dto->set_form_id( $form_id );
        $dto->set_element_id( $element['id'] );
        $dto->set_element_type( self::get_key() . "_" . $open_ended_type );
        return $dto;
    }

    protected function delete( $answer, OpenEndedTextInnerRepository $text_inner_repository ) {
        if ( ! $answer ) {
            return false;
        }

        if ( 'open_ended_text' === $answer->element_type ) {
            $text_inner_repository->delete( $answer->text_inner_id );
        }

        return $this->element_answer_repository->delete( $answer->id );
    }

    protected function delete_text_inners( int $id, OpenEndedTextInnerRepository $text_inner_repository ) {
        $text_inner = $text_inner_repository->get_by_id( $id );

        if ( $text_inner ) {
            $file_id = intval( $text_inner->file );
            if ( 0 !== $file_id ) {
                Repository::delete_attachment( $file_id );
            }
        }

        return $text_inner_repository->delete( $id );
    }

    protected function get_element_summary( stdClass $form, array $element, int $page, int $per_page ) {
        $answers = $this->query( $form->id, $element['id'], $element['element_type'], true )->with(
            [
                'attachment',
                'open_ended_text_inners.attachment'
            ]
        )->select( 'id, element_type, value, attachment_id, created_at' )->pagination( $per_page, $page );

        return array_map(
            function( $answer ) {
                if ( ! empty( $answer->attachment ) ) {
                    Repository::bind_file_url( $answer->attachment );
                } elseif ( ! empty( $answer->open_ended_text_inners->attachment ) ) {
                    Repository::bind_file_url( $answer->open_ended_text_inners->attachment );
                }
                return $answer;
            }, $answers
        );
    }
}