<?php

namespace HelpGent\App\Repositories;

use HelpGent\App\DTO\AddressDTO;
use HelpGent\App\Models\Address;

class AddressRepository {
    public function create( AddressDTO $address_dto ) {
        return Address::query()->insert_get_id( $address_dto->to_array() );
    }

    public function update( AddressDTO $address_dto ) {
        $values               = $address_dto->to_array();
        $values['updated_at'] = helpgent_now();
        return Address::query()->where( 'id', $address_dto->get_id() )->update( $values );
    }

    /**
     * Create multiple items
     */
    public function creates( AddressDTO ...$items ) {
        return Address::query()->insert(
            array_map(
                function( AddressDTO $item ) {
                    return $item->to_array();
                }, $items
            )
        );
    }

    public function delete( int $id ) {
        return Address::query()->where( 'id', $id )->delete();
    }
}