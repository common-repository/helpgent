<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\Element;
use HelpGent\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;
use HelpGent\App\Support\Element\Summary\Chart;

class YesNo extends Element {

    use Chart;

    public static function get_key(): string {
        return 'yes_no';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $general_controls = $element['controls']['general'];
        $required         = $general_controls['required']['isActive'];

        $rule = '';

        if ( '1' === $required ) {
            $rule = 'required|';
        }

        $validator->validate(
            [
                $element['element_type'] => "{$rule}integer|accepted:0,1",
            ]
        );

        static::throw_validator_errors( $validator );
    }

    protected function get_element_summary( stdClass $form, array $element ) {
        $options = [
            [
                'label' => helpgent_get_nested_value( 'controls.general.options.0.label', $element ),
                'total' => 0
            ],
            [
                'label' => helpgent_get_nested_value( 'controls.general.options.1.label', $element ),
                'total' => 0
            ]
        ];

        $answers = $this->get_answers( $form, $element );

        foreach ( $answers as $answer ) {
            if ( '1' === $answer->value ) {
                $options[0]['total'] = intval( $answer->total );
            } elseif ( '0' ===  $answer->value ) {
                $options[1]['total'] = intval( $answer->total );
            }
        }

        return $options;
    }

    public function get_summary( stdClass $form, array $element, int $page = 0, int $per_page = 0 ) {
        return apply_filters( "helpgent_chart_summery", $this->get_element_summary( $form, $element ), $element );
    }
}