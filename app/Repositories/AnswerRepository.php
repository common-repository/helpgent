<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Support\Element\Fields\Address;
use HelpGent\App\Support\Element\Fields\ContactInfo;
use HelpGent\App\Support\Element\Fields\DropDown;
use HelpGent\App\Support\Element\Fields\FileUpload;
use HelpGent\App\Support\Element\Fields\GDPR;
use HelpGent\App\Support\Element\Fields\SingleSelect;
use HelpGent\App\Support\Element\Fields\YesNo;
use HelpGent\App\Utils\Repository;

class AnswerRepository {
    public ResponseRepository $response_repository;

    public FormRepository $form_repository;

    public AttachmentRepository $attachment_repository;

    protected array $elements = [];

    public function __construct( ResponseRepository $response_repository, FormRepository $form_repository, AttachmentRepository $attachment_repository ) {
        $this->response_repository   = $response_repository;
        $this->form_repository       = $form_repository;
        $this->attachment_repository = $attachment_repository;
    }

    public function get( int $response_id ) {
        $response = $this->response_repository->get_by_id( $response_id );

        if ( ! $response ) {
            throw new Exception( esc_html__( 'Response not found.', 'helpgent' ), 404 );
        }

        $form = $this->form_repository->get_by_id( $response->form_id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        $contents = json_decode( $form->content, true );

        $elements = [];

        foreach ( $contents['elements'] as $element ) {
            $elements[$element['id']] = $element;
        }

        $this->elements = $elements;

        $answers = ElementAnswers::query()->with(
            [
                'attachment',
                'address',
                'contact_info',
                'open_ended_text_inners.attachment'
            ] 
        )->select( 'id, element_id, element_type, value, attachment_id, created_at' )->where( 'response_id', $response_id )->where( 'element_type', '!=', GDPR::get_key() )->get();
        return array_map( [$this, 'prepare_answer'], $answers );
    }

    protected function prepare_answer( $answer ) {
        if ( empty( $this->elements[$answer->element_id]['controls'] ) ) {
            return [];
        }

        $general_settings = $this->elements[$answer->element_id]['controls']['general'];

        switch ( $answer->element_type ) {
            case FileUpload::get_key():
                $this->prepare_files_answers( $answer );
                break;
            case Address::get_key():
                $answer->labels = Repository::get_fields_labels( $this->elements[$answer->element_id]['fields'] );
                break;
            case ContactInfo::get_key():
                $answer->labels = Repository::get_fields_labels( $this->elements[$answer->element_id]['fields'] );
                break;
            case SingleSelect::get_key():
            case DropDown::get_key():
            case YesNo::get_key():
                $answer->options = $general_settings['options'];
                break;
            case 'open_ended_text':
                $answer->labels = Repository::get_fields_labels( $general_settings['text_fields'] );
                break;
            default:
                break;
        }

        $answer = apply_filters( "helpgent_prepare_answer", $answer, $this->elements[$answer->element_id] );

        if ( ! empty( $answer->attachment ) ) {
            Repository::bind_file_url( $answer->attachment );
        } elseif ( ! empty( $answer->open_ended_text_inners->attachment ) ) {
            Repository::bind_file_url( $answer->open_ended_text_inners->attachment );
        }

        $answer->element_title = isset( $this->elements[$answer->element_id] ) ? $this->elements[$answer->element_id]['title'] : esc_html__( 'Unknown', 'helpgent' );
        unset( $answer->element_id );

        return $answer;
    }

    protected function prepare_files_answers( $answer ) {
        $file_ids = json_decode( $answer->value );

        if ( empty( $file_ids ) ) {
            $answer->attachments = [];
            return;
        }

        $files = Repository::attachment_query()->where_in( 'id', $file_ids )->get();
        $files = array_map(
            function( $file ) {
                return Repository::clean_file( Repository::bind_file_url( $file ) );
            }, $files 
        );

        unset( $answer->value );

        $answer->attachments = $files;
    }
}