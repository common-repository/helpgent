<?php

namespace HelpGent\App\Support\Element\Summary;

use stdClass;
use HelpGent\App\EnumeratedList\SummaryType;

trait Chart {

    use Summary;

    public static function summary_type(): string {
        return SummaryType::CHART;
    }

    protected function get_answers( stdClass $form, array $element ) {
        return $this->query( $form->id, $element['id'], $element['element_type'] )->select( 'value', "COUNT(value) AS total" )->group_by( 'value' )->get();
    }

    protected function get_element_summary( stdClass $form, array $element ) {
        return $this->get_answers( $form, $element );
    }

    public function get_summary( stdClass $form, array $element, int $page = 0, int $per_page = 0 ) {
        $summary = [ 'answers' => $this->get_element_summary( $form, $element ) ];
    
        return apply_filters( "helpgent_chart_summery", $summary, $element );
    }
}