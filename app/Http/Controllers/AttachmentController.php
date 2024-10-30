<?php

namespace HelpGent\App\Http\Controllers;

use Exception;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\App\Repositories\ResponseRepository;
use WP_REST_Request;
use HelpGent\WpMVC\Routing\Response;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Repositories\AttachmentRepository;
use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\DTO\ChunkFileDTO;
use HelpGent\App\DTO\AttachmentUploadSessionDTO;
use HelpGent\App\Repositories\AttachmentUploadSessionRepository;
use HelpGent\App\MediaDrivers\Local as LocalDrive;

class AttachmentController extends Controller {
    public AttachmentRepository $attachment_repository;

    public ResponseRepository $response_repository;

    public AttachmentUploadSessionRepository $attachment_upload_session_repository;

    public string $attachment_driver;

    public function __construct( AttachmentRepository $attachment_repository, AttachmentUploadSessionRepository $attachment_upload_session_repository, ResponseRepository $response_repository ) {
        $this->attachment_repository                = $attachment_repository;
        $this->attachment_upload_session_repository = $attachment_upload_session_repository;
        $this->response_repository                  = $response_repository;
        $this->attachment_driver                    = helpgent_get_setting( 'active_media_driver', LocalDrive::get_key() );
    }

    public function show( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate( [ 'id' => 'required|numeric' ] );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $attachment = $this->attachment_repository->get_by_id( absint( $wp_rest_request->get_param( 'id' ) ) );

        if ( ! $attachment ) {
            return Response::send(
                [
                    'message' => esc_html__( 'The attachment could not be found.', 'helpgent' )
                ], 404
            );
        }

        $attachment = helpgent_make_attachment_dto( $attachment );
        $user       = helpgent_get_current_user();

        if ( ! helpgent_can_user_access_attachment( $attachment, $user ) ) {
            return Response::send( [ 'message' => esc_html__( 'Access is forbidden.', 'helpgent' ) ], 403 );
        }

        return Response::send(
            [
                'id'        => $attachment->get_id(),
                'mime_type' => $attachment->get_mime_type(),
                'url'       => $this->attachment_repository->get_file_url( 
                    $attachment->get_title(), 
                    $attachment->get_file_id(), 
                    $attachment->get_storage()
                ),
            ]
        );
    }

    public function answer_store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'form_id'    => 'required|numeric',
                'element_id' => 'required|string',
                'file'       => 'required|file',
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        $file = $wp_rest_request->get_file_params();
        $file = $file['file'];

        try {
            $attachment = $this->attachment_repository->upload_and_create( $file, $this->attachment_driver );
        } catch ( Exception $e ) {
            return Response::send(
                [ 'message' => $e->getMessage() ], $e->getCode()
            );
        }

        return Response::send(
            [
                'id'        => $attachment->get_id(),
                'mime_type' => $attachment->get_mime_type(),
                'url'       => $this->attachment_repository->get_file_url( 
                    $attachment->get_title(), 
                    $attachment->get_file_id(), 
                    $attachment->get_storage()
                ),
                'token'     => $attachment->get_upload_token()
            ]
        );
    }

    public function store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'file'        => 'required|file',
                'response_id' => 'required|numeric'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        $file = $wp_rest_request->get_file_params();
        $file = $file['file'];

        try {
            $attachment = $this->attachment_repository->upload_and_create( $file, $this->attachment_driver );
        } catch ( Exception $e ) {
            return Response::send(
                [ 'message' => $e->getMessage() ], $e->getCode()
            );
        }

        return Response::send(
            [
                'id'        => $attachment->get_id(),
                'mime_type' => $attachment->get_mime_type(),
                'url'       => $this->attachment_repository->get_file_url( 
                    $attachment->get_title(), 
                    $attachment->get_file_id(), 
                    $attachment->get_storage()
                ),
            ]
        );
    }

    public function create_upload_id( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'file_size'   => 'required|numeric',
                'mime_type'   => 'required|string',
                'file_name'   => 'string|max:100',
                'response_id' => 'required|numeric'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        try {
            $upload_session = $this->generate_upload_id(
                $wp_rest_request->get_param( 'file_size' ), 
                $wp_rest_request->get_param( 'mime_type' ),
                ( string ) $wp_rest_request->get_param( 'file_name' ) 
            );
        } catch ( Exception $e ) {
            return Response::send(
                [ 'message' => $e->getMessage() ], $e->getCode()
            );
        }

        return Response::send(
            [ 
                'upload_id' => $upload_session->get_id(),
                'token'     => $upload_session->get_upload_token(),
            ] 
        );
    }

    public function create_answer_upload_id( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'file_size'  => 'required|numeric',
                'mime_type'  => 'required|string',
                'file_name'  => 'string|max:100',
                'form_id'    => 'required|numeric',
                'element_id' => 'required|string',
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        try {
            $upload_session = $this->generate_upload_id(
                $wp_rest_request->get_param( 'file_size' ), 
                $wp_rest_request->get_param( 'mime_type' ),
                ( string ) $wp_rest_request->get_param( 'file_name' ),
            );
        } catch ( Exception $e ) {
            return Response::send(
                [ 'message' => $e->getMessage() ], $e->getCode()
            );
        }

        return Response::send(
            [ 
                'upload_id' => $upload_session->get_id(),
                'token'     => $upload_session->get_upload_token(),
            ] 
        );
    }

    /**
     * @throws Exception Sorry, this file type is not permitted.
     */
    public function generate_upload_id( string $file_size, string $mime_type, string $file_name = '' ): AttachmentUploadSessionDTO {
        $extension = helpgent_get_extension_from_mime_type( $mime_type );

        if ( empty( $extension ) ) {
            throw new Exception( __( 'Sorry, this file type is not permitted.', 'helpgent' ), 422 );
        }

        $file_name = ! empty( $file_name ) 
            ? $file_name
            : helpgent_generate_unique_key( 'file' ) . $extension;

        $file_name = helpgent_generate_unique_file_name( $file_name );

        $file = new AttachmentDTO(
            $file_name,
            $mime_type,
            $file_size,
            $this->attachment_driver
        );

        return $this->attachment_repository->create_upload_session( $file, $this->attachment_driver );
    }

    public function upload_chunk( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'upload_id'  => 'required|numeric',
                'token'      => 'required|string',
                'content'    => 'required|string|file',
                'range_from' => 'required|numeric',
                'range_to'   => 'required|numeric',
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $upload_id    = ( int ) $wp_rest_request->get_param( 'upload_id' );
        $upload_token = $wp_rest_request->get_param( 'token' );

        try {
            $upload_session = $this->attachment_repository->get_attachment_upload_session( $upload_id, $upload_token );
        } catch ( Exception $e ) {
            return Response::send(
                [ 'message' => $e->getMessage() ], $e->getCode()
            );
        }

        $content = ! empty( $wp_rest_request->get_param( 'content' ) ) ? $wp_rest_request->get_param( 'content' ) : '';
        $files   = $wp_rest_request->get_file_params();

        if ( isset( $files['content'] ) ) {
            $chunk     = $files['content'];
            $temp_file = fopen( $chunk['tmp_name'], 'r' );
            $to        = (int) $wp_rest_request->get_param( 'range_to' ) - (int) $wp_rest_request->get_param( 'range_from' );

            fseek( $temp_file, 0 );
            $content = fread( $temp_file, $to );
            fclose( $temp_file );
        }

        $chunk_file = new ChunkFileDTO(
            $upload_session->get_id(),
            $upload_session->get_title(),
            $content,
            $wp_rest_request->get_param( 'range_from' ),
            $wp_rest_request->get_param( 'range_to' ),
            $upload_session->get_file_size(),
            $upload_session->get_mime_type()
        );

        try {
            $upload_status = $this->attachment_repository->upload_chunk_and_create( $chunk_file, $upload_session );
        } catch ( Exception $e ) {
            return Response::send(
                [ 'message' => $e->getMessage() ], $e->getCode(), [ 'last-sent-bytes' => $upload_session->get_last_sent_bytes() ]
            );
        }

        if ( $upload_status->get_is_done() && $upload_status->get_file() ) {
            return Response::send(
                [ 
                    'id'        => $upload_status->get_file()->get_id(),
                    'token'     => $upload_status->get_file()->get_upload_token(),
                    'mime_type' => $upload_status->get_file()->get_mime_type(),
                    'url'       => $this->attachment_repository->get_file_url(
                        $upload_status->get_file()->get_file_name(), 
                        $upload_status->get_file()->get_file_id(), 
                        $upload_status->get_file()->get_storage()
                    ),
                ]
            );
        }

        return Response::send(
            [
                'last_sent_bytes' => $upload_status->get_last_sent_bytes(),
                'message'         => esc_html__( 'The chunk data has been uploaded successfully!', 'helpgent' )
            ],
            201,
            [ 'last-sent-bytes' => $upload_status->get_last_sent_bytes() ]
        );
    }

    public function delete_answer( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'token'          => 'required|string',
                'form_id'        => 'required|numeric',
                'response_token' => 'string',
            ] 
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        /**
         * @var FormRepository $form_repository
         */
        $form_repository = helpgent_singleton( FormRepository::class );

        $form_id = intval( $wp_rest_request->get_param( 'form_id' ) );
        $form    = $form_repository->get_by_id( $form_id );

        if ( $form ) {

            $form_content = json_decode( $form->content, true );

            if ( '1' === helpgent_get_nested_value( "global.save_incomplete_data.isActive", $form_content ) ) {
                $validator->validate(
                    [
                        'response_token' => 'required|string',
                    ] 
                );
        
                if ( $validator->is_fail() ) {
                    return Response::send(
                        [
                            'messages' => $validator->errors
                        ], 422
                    );
                }

                $response = helpgent_get_response_by_token( $wp_rest_request->get_param( 'response_token' ), $form_id );

                if ( $response ) {
                    $this->response_repository->delete_attachment( $response->id, absint( $wp_rest_request->get_param( 'id' ) ) );
                }
            }
        }

        $attachment = $this->attachment_repository->get_by_upload_token( 
            absint( $wp_rest_request->get_param( 'id' ) ),
            $wp_rest_request->get_param( 'token' )
        );

        if ( ! $attachment ) {
            return Response::send(
                [
                    'message' => esc_html__( 'The attachment could not be found.', 'helpgent' )
                ], 404
            );
        }

        $attachment = helpgent_make_attachment_dto( $attachment );

        try {
            $delete = $this->attachment_repository->delete( $attachment->get_id() );

            if ( 0 === $delete ) {
                return Response::send(
                    [
                        'message' => esc_html__( 'Oops, something went wrong. Please try again.', 'helpgent' )
                    ], 500
                );
            }

            $this->attachment_repository->delete_file( $attachment->get_title(), $attachment->get_file_id(), $this->attachment_driver );

            return Response::send(
                [
                    'message' => esc_html__( 'The attachment has been successfully deleted.', 'helpgent' )
                ]
            );
        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }

    public function storage_summary( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $this->attachment_repository->get_storage_summary();
        return Response::send( $this->attachment_repository->get_storage_summary() );
    }
}