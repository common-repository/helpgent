<?php

namespace HelpGent\App\Support\Element\Summary;

use stdClass;
use HelpGent\App\EnumeratedList\SummaryType;

trait Custom {

    use Summary;

    public static function summary_type(): string {
        return SummaryType::CUSTOM;
    }

    protected function get_answers( stdClass $form, array $element ) {
        return $this->query( $form->id, $element['id'], $element['element_type'] )->select( 'value' )->get();
    }

    protected function get_element_summary( stdClass $form, array $element ) {
        return $this->get_answers( $form, $element );
    }

    public function get_summary( stdClass $form, array $element, int $page = 0, int $per_page = 0 ) {
        return apply_filters( "helpgent_custom_summery", $this->get_element_summary( $form, $element ), $element, $form );
    }
}

