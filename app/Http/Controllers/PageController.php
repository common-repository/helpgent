<?php

namespace HelpGent\App\Http\Controllers;

use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use HelpGent\WpMVC\View\View;
use WP_REST_Request;

class PageController extends Controller {
    public FormRepository $form_repository;

    public function __construct( FormRepository $form_repository ) {
        $this->form_repository = $form_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id' => 'required|numeric',
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $show_preview = apply_filters( "helpgent_allowed_form_preview", current_user_can( 'manage_options' ), intval( $wp_rest_request->get_param( 'id' ) ) );

        if ( ! $show_preview ) {
            View::render(
                'form-preview-notice', [
                    'notice'            => esc_html__( "Sorry, you are not allowed to preview this form. Only Administrator can preview this form.", "helpgent" ),
                    'show_login_button' => true
                ] 
            );
            die;
        }

        $id = intval( $wp_rest_request->get_param( 'id' ) );

        $form = $this->form_repository->get_by_id( $id );

        if ( ! $form ) {
            View::render(
                'form-preview-notice', [
                    'notice' => esc_html__( "Sorry, form not found.", "helpgent" ),
                ] 
            );
            die;
        }

        include_once helpgent_dir( 'enqueues/register.php' );
        include_once helpgent_dir( 'enqueues/enqueue-common.php' );

        wp_enqueue_script( 'helpgent/form/shortcode' );

        $GLOBALS['helpgent_is_preview'] = true;
        View::render( 'page', compact( 'form' ) );
        die;
    }
}