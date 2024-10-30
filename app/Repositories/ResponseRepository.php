<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\DTO\AdminResponseReadDTO;
use HelpGent\App\DTO\ResponseDTO;
use HelpGent\App\DTO\UserResponseReadDTO;
use HelpGent\App\Models\Attachment;
use HelpGent\App\Models\Form;
use HelpGent\App\Models\Guest;
use HelpGent\App\Models\Message;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Models\Response;
use HelpGent\App\Models\ResponseAttachment;
use HelpGent\App\Models\ResponseMeta;
use HelpGent\App\Models\ResponseTag;
use HelpGent\App\Models\User;
use HelpGent\App\Utils\DateTime;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\Database\Query\Builder;
use wpdb;

class ResponseRepository {
    public function get( AdminResponseReadDTO $response_read_dto ) {
        $query = Response::query( 'response' )->where( 'response.form_id', $response_read_dto->get_form_id() )
        ->where( 'response.is_archive', $response_read_dto->get_is_archive() );

        if ( ! is_null( $response_read_dto->get_is_completed() ) ) {
            $query->where( 'response.is_completed', $response_read_dto->get_is_completed() );
        }

        $tag_ids = $response_read_dto->get_tag_ids();

        // If find responses of certain tags
        if ( ! empty( $tag_ids ) ) {
            $tag_ids    = map_deep( $tag_ids, 'intval' );
            $tag_exists = ResponseTag::query( 'response_tag' )->select( 1 )
                            ->where_column( 'response_tag.response_id', 'response.id' )
                            ->where_in( 'response_tag.tag_id', $tag_ids )->limit( 1 );

            $query->where_exists( $tag_exists );
        }

        if ( ! empty( $response_read_dto->get_search() ) ) {
            $this->search_query( $response_read_dto->get_search(), $query );
        }

        switch ( $response_read_dto->get_order_by() ) {
            case 'latest':
                $query->order_by_desc( 'response.updated_at' );
                break;
            case 'oldest':
                $query->order_by( 'response.updated_at' );
                break;
            case 'read':
                $query->order_by_desc( 'response.is_read' );
                break;
            case 'unread':
                $query->order_by( 'response.is_read' );
                break;
        }

        $form_date = $response_read_dto->get_from_date();

        if ( $form_date instanceof DateTime ) {
            $query->where( 'response.created_at', '>=', $form_date );
        }

        $to_date = $response_read_dto->get_to_date();

        if ( $to_date instanceof DateTime ) {
            $query->where( 'response.created_at', '<=', $to_date );
        }

        $query->with(
            [
                'tags',
                'user'               => [Repository::class, 'user_select_query'],
                'user_guest'         => [Repository::class, 'guest_user_select_query'],
                'message'            => function ( Builder $query ) {
                    $query->order_by_desc( 'helpgent_messages.id' );
                },
                'message.forward',
                'message.user'       => [Repository::class, 'user_select_query'],
                'message.user_guest' => [Repository::class, 'guest_user_select_query'],
            ] 
        );

        return $this->prepare_response( $query->pagination( $response_read_dto->get_per_page(), $response_read_dto->get_page() ) );
    }

    public function user_get( UserResponseReadDTO $response_read_dto ) {
        $query = Response::query( 'response' )
        ->select(
            'response.id',
            'response.form_id',
            'response.is_read',
            'response.created_by',
            'response.is_guest', 
            'response.is_archive',
            'response.is_completed',
            'response.is_verified',
            'response.is_completed',
            'response.updated_at',
            'form.content as form_content'
        )
        ->where( 'response.is_archive', 0 )
        ->where( 'response.is_completed', $response_read_dto->get_is_completed() )->left_join( 'helpgent_forms as form', 'response.form_id', '=', 'form.id' );

        /**
         * Is user type guest or registered user
         */
        $query->where( 'response.created_by', $response_read_dto->get_created_by() )->where( 'response.is_guest', $response_read_dto->get_is_guest() );

        if ( ! empty( $response_read_dto->get_search() ) ) {
            $this->search_query( $response_read_dto->get_search(), $query );
        }

        switch ( $response_read_dto->get_order_by() ) {
            case 'latest':
                $query->order_by_desc( 'response.updated_at' );
                break;
            case 'oldest':
                $query->order_by( 'response.updated_at' );
                break;
            case 'read':
                $query->order_by_desc( 'response.is_read' );
                break;
            case 'unread':
                $query->order_by( 'response.is_read' );
                break;
        }

        $query->with(
            [
                'user'               => [Repository::class, 'user_select_query'],
                'user_guest'         => [Repository::class, 'guest_user_select_query'],
                'message'            => function ( Builder $query ) {
                    $query->order_by_desc( 'helpgent_messages.id' );
                },
                'message.forward',
                'message.user'       => [Repository::class, 'user_select_query'],
                'message.user_guest' => [Repository::class, 'guest_user_select_query'],
            ] 
        );

        return $this->prepare_response( $query->pagination( $response_read_dto->get_per_page(), $response_read_dto->get_page() ) );
    }

    protected function prepare_response( array $responses ) {
        return array_map(
            function( $response ) {
                if ( isset( $response->user->user_email ) ) {
                    $response->user->avatar_url = get_avatar_url( $response->user->user_email );
                } elseif ( isset( $response->user_guest->email ) ) {
                    $response->user_guest->avatar_url = get_avatar_url( $response->user_guest->email );
                }

                if ( ! empty( $response->message->attachment_id ) ) {
                    $attachment = Repository::attachment_query()->where( 'id', $response->message->attachment_id )->first();

                    if ( ! empty( $attachment ) ) {
                        $attachment = Repository::clean_file( Repository::bind_file_url( $attachment ) );
                    }

                    $response->message->attachment = $attachment;
                }

                if ( ! empty( $response->message->forward->attachment_id ) ) {
                    $attachment = Repository::attachment_query()->where( 'id', $response->message->forward->attachment_id )->first();

                    if ( ! empty( $attachment ) ) {
                        $attachment = Repository::clean_file( Repository::bind_file_url( $attachment ) );
                    }

                    $response->message->forward->attachment = $attachment;
                }

                if ( ! empty( $response->form_content ) ) {
                    $response->media_settings = helpgent_get_nested_value( 'global.media', json_decode( $response->form_content, true ) );
                    unset( $response->form_content );
                }
                return $response;
            }, $responses
        );
    }

    public function form( int $form_id ) {
        $columns = ['form.id', 'form.title', 'form.content'];

        $form_query = Form::query( 'form' )->select( $columns )->where( 'form.id', $form_id )->group_by( $columns );

        /**
         * @var Builder $form_query
         */
        $form_query     = apply_filters( 'helpgent_response_form_query', $form_query );
        $join_form_meta = apply_filters( 'helpgent_response_form_query_join_meta', false );

        if ( $join_form_meta ) {
            $form_query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "form.id" );
        }

        $form = $form_query->first();

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }
        $form = Repository::bind_form_featured_image( $form );
        $form = Repository::bind_form_media_settings( $form );
        unset( $form->content );

        $form->total_response = [
            'completed'   => Response::query()->where( 'form_id', $form_id )->where( 'is_completed', 1 )->where( 'is_archive', 0 )->count(),
            'incompleted' => Response::query()->where( 'form_id', $form_id )->where( 'is_completed', 0 )->where( 'is_archive', 0 )->count(),
        ];

        return $form;
    }

    protected function search_query( string $search, Builder $query ) {
        global $wpdb;
        /**
         * @var wpdb $wpdb;
         */
        $search = $wpdb->prepare( "%s", "%{$search}%" );

        $user_exists = User::query()->select( 1 )
            ->where( 'response.is_guest', 0 )
            ->where_column( 'response.created_by', 'users.ID' )
            ->where_raw( "(users.display_name like {$search} or users.user_email like {$search})" )
            ->limit( 1 );

        $guest_exists = Guest::query()->select( 1 )
            ->where( 'response.is_guest', 1 )
            ->where_column( 'response.created_by', 'helpgent_guest_users.id' )
            ->where_raw( "(helpgent_guest_users.name like {$search} or helpgent_guest_users.email like $search)" )
            ->limit( 1 );

        $query->where_exists( $user_exists );
        $query->where_exists( $guest_exists, 'or' );
    }

    public function total( int $form_id ) {
        return Response::query()->where( 'form_id', $form_id )->count();
    }

    public function create( ResponseDTO $response_dto ) {
        $is_verified = $response_dto->get_is_verified();

        $data =  [
            'form_id'      => $response_dto->get_form_id(),
            'is_completed' => $response_dto->get_is_completed(),
            'ip'           => $response_dto->get_ip(),
            'created_by'   => $response_dto->get_created_by(),
            'is_guest'     => $response_dto->get_is_guest(),
            'updated_at'   => helpgent_now()
        ];

        if ( ! empty( $is_verified ) ) {
            $data['is_verified'] = $is_verified;
        }

        return Response::query()->insert_get_id( $data );
    }

    public function create_and_get_token( ResponseDTO $response_dto ) {
        $response_id = $this->create( $response_dto );

        /**
         * Generating and storing token to identify the subsequent response on this response.
         */
        $token = 'response_token-' . helpgent_generate_token();

        /**
         * @var FormRepository $form_repository
         */
        $form_repository = helpgent_singleton( FormRepository::class );
        $form_repository->add_meta( $response_dto->get_form_id(), $token, $response_id );

        return $token;
    }

    public function update( ResponseDTO $response_dto ) {
        $form_response = $this->get_by_id( $response_dto->get_id() );

        if ( ! $form_response ) {
            throw new Exception( esc_html__( 'Form response not found.', 'helpgent' ), 404 );
        }

        return Response::query()->where( 'id', $response_dto->get_id() )->update(
            [
                'form_id'      => $response_dto->get_form_id(),
                'is_completed' => $response_dto->get_is_completed(),
                'ip'           => $response_dto->get_ip(),
                'created_by'   => $response_dto->get_created_by(),
                'is_guest'     => $response_dto->get_is_guest(),
                'updated_at'   => helpgent_now()
            ]
        );
    }

    public function verify( int $response_id ) {
        return Response::query()->where( 'id', $response_id )->update(
            [
                'is_verified' => 1
            ]
        );
    }

    public function cancel( int $response_id ) {
        return Response::query()->where( 'id', $response_id )->update(
            [
                'is_verified' => 0
            ]
        );
    }

    public function update_updated_at( int $id ) {
        return Response::query()->where( 'id', $id )->update(
            [
                'updated_at' => helpgent_now()
            ]
        );
    }

    public function update_create_by( int $id, int $created_by, int $is_guest = 0 ) {
        return Response::query()->where( 'id', $id )->update(
            [
                'created_by' => $created_by,
                'is_guest'   => $is_guest
            ]
        );
    }

    public function get_by_id( int $id ) {
        return Response::query()->where( 'id', $id )->first();
    }

    public function delete( int $id ) {
        $response = $this->get_by_id( $id );

        if ( ! $response ) {
            throw new Exception( esc_html__( 'Response not found.', 'helpgent' ), 404 );
        }

        $delete = Response::query()->where( 'id', $id )->delete();

        $this->delete_metas( $id );
        $this->delete_response_tags( $id );
        $this->delete_answers( $id );
        $this->delete_messages( $id );

        Repository::delete_contact_info_of_unknown_answers();
        Repository::delete_address_of_unknown_answers();
        Repository::delete_open_ended_text_inners_of_unknown_answers();

        Repository::delete_unused_forward_messages();
        Repository::delete_response_attachment_of_unknown_responses();

        return $delete;
    }

    public function mark_as_completed( int $id ) {
        return Response::query()->where( 'id', $id )->update(
            [
                'is_completed' => 1
            ]
        );
    }

    public function delete_metas( int $response_id ) {
        return ResponseMeta::query()->where( 'response_id', $response_id )->delete();
    }

    public function delete_response_tags( int $response_id ) {
        return ResponseTag::query()->where( 'response_id', $response_id )->delete();
    }

    public function delete_answers( int $response_id ) {
        return ElementAnswers::query( "answer" )->where( 'answer.response_id', $response_id )->delete();
    }

    public function delete_messages( int $response_id ) {
        return Message::query()->where( 'response_id', $response_id )->delete();
    }

    public function update_read( int $id, int $is_read ) {
        $response = $this->get_by_id( $id );

        if ( ! $response ) {
            throw new Exception( esc_html__( 'Form response not found.', 'helpgent' ), 404 );
        }

        return Response::query()->where( 'id', $id )->update(
            [
                'is_read' => $is_read
            ]
        );
    }

    public function update_archive_status( int $id, int $is_archive ) {
        $response = $this->get_by_id( $id );

        if ( ! $response ) {
            throw new Exception( esc_html__( 'Form response not found.', 'helpgent' ), 404 );
        }

        return Response::query()->where( 'id', $id )->update(
            [
                'is_archive' => $is_archive
            ]
        );
    }

    public function get_meta( int $response_id, string $meta_key ) {
        return ResponseMeta::query()->where( 'response_id', $response_id )->where( 'meta_key', $meta_key )->first();
    }

    public function get_meta_value( int $response_id, string $meta_key ) {
        $meta = $this->get_meta( $response_id, $meta_key );
        if ( ! $meta ) {
            return false;
        }
        return $meta->meta_value;
    }

    public function add_meta( int $response_id, string $meta_key, string $meta_value ) {
        $meta = $this->get_meta( $response_id, $meta_key );

        if ( $meta ) {
            return false;
        }

        return ResponseMeta::query()->insert(
            [
                'response_id' => $response_id,
                'meta_key'    => $meta_key,
                'meta_value'  => $meta_value,
            ]
        );
    }

    public function update_meta( int $response_id, string $meta_key, string $meta_value ) {

        $update = ResponseMeta::query()->where( 'form_id', $response_id )->where( 'meta_key', $meta_key )->update(
            [
                'meta_value' => $meta_value,
            ]
        );

        if ( $update ) {
            return $update;
        }

        return ResponseMeta::query()->insert(
            [
                'response_id' => $response_id,
                'meta_key'    => $meta_key,
                'meta_value'  => $meta_value,
            ]
        );
    }

    public function add_attachments( int $response_id, array $attachment_tokens ) {
        $attachment_ids = array_map(
            function( $id ) {
                return intval( $id );
            }, array_values( $attachment_tokens )
        );

        $attachment_tokens = array_map(
            function( $token ) {
                return is_string( $token ) ? $token : '';
            }, array_keys( $attachment_tokens )
        );

        $attachments = Attachment::query()->select( 'id' )->where_in( 'id', $attachment_ids )->where_in( 'upload_token', $attachment_tokens )->get();

        global $wpdb;

        if ( ! empty( $attachments ) ) {
            foreach ( $attachments as $attachment ) {
                $this->add_attachment( $response_id, $attachment->id );
            }
        }
    }

    public function add_attachment( int $response_id, int $attachment_id ) {
        global $wpdb;

        $wpdb->query(
            $wpdb->prepare(
                "INSERT INTO {$wpdb->prefix}helpgent_response_attachment (response_id, attachment_id) SELECT %d, %d FROM dual
    WHERE NOT EXISTS (
    SELECT 1
    FROM {$wpdb->prefix}helpgent_response_attachment
    WHERE response_id = %d AND attachment_id = %d
    ); ", $response_id, $attachment_id, $response_id, $attachment_id
            )
        );
    }

    public function delete_attachment( int $response_id, int $attachment_id ) {
        ResponseAttachment::query()->where( 'response_id', $response_id )->where( 'attachment_id', $attachment_id )->delete();
    }

    public function delete_meta( int $response_id, string $meta_key ) {
        return ResponseMeta::query()->where( 'response_id', $response_id )->where( 'meta_key', $meta_key )->delete();
    }

    public function first_by_created_by( int $id, int $created_by, int $is_guest = 0, int $is_completed = 1 ) {
        return Response::query()->where( 'id', $id )->where( 'created_by', $created_by )->where( 'is_guest', $is_guest )->where( 'is_completed', $is_completed )->first();
    }

    public function get_ids_by_attachment_id( int $attachment_id ) {
        $response_ids = Message::query( 'message' )->select( 'message.response_id' )->where( 'message.attachment_id', $attachment_id )
                        ->left_join( 'helpgent_message_forwards', 'message.forward_id', '=', 'helpgent_message_forwards.id' )
                        ->or_where( 'helpgent_message_forwards.attachment_id', $attachment_id )
                        ->group_by( 'message.response_id' )
                        ->get();
        return array_column( $response_ids, 'response_id' );
    }

    public function delete_user_response( int $user_id, int $is_guest = 0 ) {
        return Response::query()->where( 'created_by', $user_id )->where( 'is_guest', $is_guest )->delete();
    }
}