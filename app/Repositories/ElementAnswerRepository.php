<?php

namespace HelpGent\App\Repositories;

use HelpGent\App\DTO\ElementAnswerDTO;
use HelpGent\App\Models\ElementAnswers;

class ElementAnswerRepository {
    public function get_response_response( int $response_id, int $form_id ) {
        return ElementAnswers::query()->where( 'response_id', $response_id )->where( 'form_id', $form_id )->get();
    }

    public function create( ElementAnswerDTO $element_answer_dto ) {
        return ElementAnswers::query()->insert_get_id( $element_answer_dto->to_array() );
    }

    /**
     * Create multiple items
     */
    public function creates( ElementAnswerDTO ...$items ) {
        return ElementAnswers::query()->insert(
            array_map(
                function( ElementAnswerDTO $item ) {
                    return $item->to_array();
                }, $items
            )
        );
    }

    public function update( ElementAnswerDTO $element_answer_dto ) {
        $data               = $element_answer_dto->to_array();
        $data['updated_at'] = helpgent_now();
        return ElementAnswers::query()->where( 'id', $element_answer_dto->get_id() )->update( $data );
    }

    public function delete( int $id ) {
        return ElementAnswers::query()->where( 'id', $id )->delete();
    }

    public function get_by_element_first( int $response_id, string $element_id, string $element_type, bool $element_type_like = false ) {
        $query = ElementAnswers::query()->where( 'response_id', $response_id )->where( 'element_id', $element_id );

        if ( $element_type_like ) {
            return $query->where( 'element_type', 'like', "%{$element_type}%" )->first();
        }

        return $query->where( 'element_type', $element_type )->first();
    }
}