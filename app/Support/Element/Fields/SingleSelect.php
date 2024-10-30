<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\Element;
use HelpGent\App\Support\Element\Summary\Chart;
use HelpGent\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

class SingleSelect extends Element {
    
    use Chart;

    public static function get_key(): string {
        return 'single_select';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $general_controls = $element['controls']['general'];
        $required         = $general_controls['required']['isActive'];
        $values           = implode( ',', array_column( $general_controls['options'], 'id' ) );

        $rule = '';

        if ( '1' === $required ) {
            $rule = 'required|';
        }

        $validator->validate(
            [
                $element['element_type'] => "{$rule}string|accepted:{$values}",
            ]
        );

        static::throw_validator_errors( $validator );
    }

    protected function get_element_summary( stdClass $form, array $element ) {
        $answers = $this->get_answers( $form, $element );

        $items = [];

        foreach ( $answers as $answer ) {
            $items[$answer->value] = $answer->total;
        }

        $final_answers = [];

        foreach ( helpgent_get_nested_value( 'controls.general.options', $element ) as $option ) {
            $final_answers[] = [
                'label' => $option['label'],
                'total' => isset( $items[$option['id']] ) ? intval( $items[$option['id']] ) : 0
            ];
        }

        return $final_answers;
    }

    public function get_summary( stdClass $form, array $element, int $page = 0, int $per_page = 0 ) {
        return apply_filters( "helpgent_chart_summery", $this->get_element_summary( $form, $element ), $element );
    }
}