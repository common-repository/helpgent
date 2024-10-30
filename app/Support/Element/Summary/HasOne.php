<?php

namespace HelpGent\App\Support\Element\Summary;

use stdClass;
use HelpGent\App\EnumeratedList\SummaryType;

trait HasOne {

    use Summary;

    public static function summary_type(): string {
        return SummaryType::HASONE;
    }

    protected function get_answers( stdClass $form, array $element, int $page, int $per_page ) {
        return $this->query( $form->id, $element['id'], $element['element_type'] )->select( 'id, value' )->with( $element['element_type'] )->pagination( $per_page, $page );
    }

    protected function get_element_summary( stdClass $form, array $element, int $page, int $per_page ) {
        return $this->get_answers( $form, $element, $page, $per_page );
    }

    public function get_summary( stdClass $form, array $element, int $page = 0, int $per_page = 0 ) {
        return apply_filters( "helpgent_has_one_summery", $this->get_element_summary( $form, $element, $page, $per_page ), $element, $form );
    }
}

