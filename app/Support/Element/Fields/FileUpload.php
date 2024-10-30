<?php

namespace HelpGent\App\Support\Element\Fields;

use HelpGent\App\Support\Element\MultiElement;
use HelpGent\App\Support\Element\Summary\Pagination;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

class FileUpload extends MultiElement {

    use Pagination;

    public static function get_key(): string {
        return 'file_upload';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $element ) {
        $general_controls = $element['controls']['general'];
        $required         = $general_controls['required']['isActive'];

        $rules = [];

        if ( '1' === $required ) {
            $rules[] = 'required';
        }

        $rules[] = 'array';

        $file_limit = $general_controls['file_count'];

        $max = '1' === $file_limit['isActive'] ? intval( $file_limit['value'] ) : 50;
        $max = min( 50, $max );

        $rules[] = "max:{$max}";
    
        $key = $element['element_type'];

        $validator->validate(
            [
                $key => implode( '|', $rules ),
            ]
        );

        static::throw_validator_errors( $validator );

        $value = $wp_rest_request->get_param( static::get_key() );

        if ( is_array( $value ) && ! helpgent_is_one_level_array( $value ) ) {
            static::throw_errors(
                [
                    $key => [
                        "Invalid file data"
                    ]
                ]
            );
        }
    }

    protected function get_element_summary( stdClass $form, array $element, int $page, int $per_page ) {
        $answers = $this->get_answers( $form, $element, $page, $per_page );

        foreach ( $answers as &$answer ) {
            $file_ids = json_decode( $answer->value );
    
            if ( empty( $file_ids ) ) {
                $answer->attachments = [];
                continue;
            }

            unset( $answer->value );
            $files               = Repository::attachment_query()->where_in( 'id', $file_ids )->get();
            $answer->attachments = array_map(
                function( $file ) {
                    return Repository::clean_file( Repository::bind_file_url( $file ) );
                }, $files 
            );
        }

        return $answers;
    }
}