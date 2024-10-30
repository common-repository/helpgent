<?php

namespace HelpGent\App\Repositories;

use HelpGent\App\DTO\ContactInfoDTO;
use HelpGent\App\Models\ContactInfo;

class ContactInfoRepository {
    public function create( ContactInfoDTO $contact_info_dto ) {
        return ContactInfo::query()->insert_get_id( $contact_info_dto->to_array() );
    }

    public function update( ContactInfoDTO $contact_info_dto ) {
        $values               = $contact_info_dto->to_array();
        $values['updated_at'] = helpgent_now();

        return ContactInfo::query()->where( 'id', $contact_info_dto->get_id() )->update( $values );
    }

    /**
     * Create multiple items
     */
    public function creates( ContactInfoDTO ...$items ) {
        return ContactInfo::query()->insert(
            array_map(
                function( ContactInfoDTO $item ) {
                    return $item->to_array();
                }, $items
            )
        );
    }

    public function delete( int $id ) {
        return ContactInfo::query()->where( 'id', $id )->delete();
    }
}