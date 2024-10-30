<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Support\Element\Fields\Address;
use HelpGent\App\Support\Element\Fields\ContactInfo;
use HelpGent\App\Support\Element\Fields\OpenEnded;
use HelpGent\App\Utils\Repository;

class SummaryRepository {
    public ElementAnswerRepository $element_answer_repository;

    public AttachmentRepository $attachment_repository;

    public function __construct( ElementAnswerRepository $element_answer_repository, AttachmentRepository $attachment_repository ) {
        $this->element_answer_repository = $element_answer_repository;
        $this->attachment_repository     = $attachment_repository;
    }

    public function get( int $form_id, string $element_id, string $element_type, int $page = 0, int $per_page = 0 ) {
        /**
         * @var FormRepository $form_repository
         */
        $form_repository = helpgent_singleton( FormRepository::class );
        $form            = $form_repository->get_by_id( $form_id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        $content  = json_decode( $form->content, true );
        $elements = $content['elements'];

        $element_key = array_search( $element_id, array_column( $elements, 'id' ) );

        if ( ! is_int( $element_key ) ) {
            throw new Exception( __( 'Element not found', 'helpgent' ), 404 );
        }

        $element = $elements[$element_key];

        $element_field_handlers = helpgent_config( 'element-fields-handlers' );
        
        if ( empty( $element_field_handlers[$element_type] ) ) {
            throw new Exception( __( 'Field handler not found.', 'helpgent' ), 404 );
        }

        $field_handler = helpgent_singleton( $element_field_handlers[$element_type] );

        /**
         * @var \HelpGent\App\Support\Element\Element $field_handler
         */
        return $field_handler->get_summary( $form, $element, $page, $per_page );
    }

    public function get_elements( int $form_id ) {
        /**
         * @var FormRepository $form_repository
         */
        $form_repository = helpgent_singleton( FormRepository::class );
        $form            = $form_repository->get_by_id( $form_id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        $content         = json_decode( $form->content, true );
        $elements        = $content['elements'];
        $ignore_elements = helpgent_ignored_elements_in_summary();
        $final_elements  = [];
        
        $totals = ElementAnswers::query()->where( 'form_id', $form_id )->select( 'element_id, COUNT(element_id) as total' )->group_by( 'element_id' )->get();

        foreach ( $elements as $element ) {
            $element_type = $element['element_type'];

            if ( in_array( $element_type, $ignore_elements, true ) ) {
                continue;
            }

            $element_id = $element['id'];

            $total_key = array_search( $element_id, array_column( $totals, 'element_id' ) );

            if ( is_int( $total_key ) ) {
                $total = intval( $totals[$total_key]->total );
            } else {
                $total = 0;
            }

            $final_element = [
                'id'             => $element_id,
                'title'          => $element['title'],
                'element_type'   => $element_type,
                'total_response' => $total
            ];

            if ( in_array( $element_type, [ContactInfo::get_key(), Address::get_key()] ) ) {
                $final_element['labels'] = Repository::get_fields_labels( $element['fields'] );
            } elseif ( OpenEnded::get_key() === $element_type ) {
                $final_element['labels'] = Repository::get_fields_labels( helpgent_get_nested_value( 'controls.general.text_fields', $element ) );
            }

            $final_elements[] = $final_element;
        }

        return $final_elements;
    }
}