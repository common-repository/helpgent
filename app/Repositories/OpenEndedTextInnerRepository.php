<?php

namespace HelpGent\App\Repositories;

use HelpGent\App\DTO\OpenEndedTextInnerDTO;
use HelpGent\App\Models\OpenEndedTextInner;
use HelpGent\App\Utils\Repository;

class OpenEndedTextInnerRepository {
    public function create( OpenEndedTextInnerDTO $dto ) {
        return OpenEndedTextInner::query()->insert_get_id( $dto->to_array() );
    }

    public function update( OpenEndedTextInnerDTO $dto ) {
        $values               = $dto->to_array();
        $values['updated_at'] = helpgent_now();
        return OpenEndedTextInner::query()->where( 'id', $dto->get_id() )->update( $values );
    }

    /**
     * Create multiple items
     */
    public function creates( OpenEndedTextInnerDTO ...$items ) {
        return OpenEndedTextInner::query()->insert(
            array_map(
                function( OpenEndedTextInnerDTO $item ) {
                    return $item->to_array();
                }, $items
            )
        );
    }

    public function get_by_id( int $id ) {
        return OpenEndedTextInner::query()->where( 'id', $id )->first();
    }

    public function delete( int $id ) {
        $data = OpenEndedTextInner::query()->where( 'id', $id )->first();

        if ( empty( $data ) ) {
            return;
        }

        if ( ! empty( $data->file ) ) {
            Repository::delete_attachment( $data->file );
        }

        OpenEndedTextInner::query()->where( 'id', $id )->delete();
    }
}