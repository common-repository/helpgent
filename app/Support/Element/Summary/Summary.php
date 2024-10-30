<?php

namespace HelpGent\App\Support\Element\Summary;

use HelpGent\App\Models\ElementAnswers;
use HelpGent\WpMVC\Database\Query\Builder;

trait Summary {
    public function query( int $form_id, string $element_id, string $element_type, bool $element_type_like = false ):Builder {
        $query = ElementAnswers::query()->where( 'form_id', $form_id )->where( 'element_id', $element_id );
        
        if ( $element_type_like ) {
            return $query->where( 'element_type', 'like', "%{$element_type}%" );
        }

        return $query->where( 'element_type', $element_type );
    }
}