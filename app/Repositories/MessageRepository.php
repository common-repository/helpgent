<?php

namespace HelpGent\App\Repositories;

use wpdb;
use stdClass;
use Exception;
use HelpGent\App\DTO\MessageDTO;
use HelpGent\App\Models\Attachment;
use HelpGent\App\Models\Message;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\Database\Query\Builder;

class MessageRepository {
    public ResponseRepository $response_repository;

    public AttachmentRepository $attachment_repository;

    public function __construct( ResponseRepository $response_repository, AttachmentRepository $attachment_repository ) {
        $this->response_repository   = $response_repository;
        $this->attachment_repository = $attachment_repository;
    }

    public function get( int $response_id, int $per_page, int $page, string $search = '' ) {
        $messages_query = Message::query()->where( 'response_id', $response_id );

        if ( ! empty( $search ) ) {
            global $wpdb;
            /**
             * @var wpdb $wpdb;
             */
            $search = $wpdb->prepare( "%s", "%{$search}%" );
            $messages_query->where_raw( "helpgent_messages.message like {$search}" );
        }

        $messages = $messages_query->select( $this->select_columns() )->with( $this->message_relations() )->order_by_desc( 'id' )->pagination( $per_page, $page );

        if ( ! is_array( $messages ) ) {
            return [];
        }
        return array_map( [$this, 'prepare_message'] , $messages );
    }

    public function get_single( int $id ) {
        $message = Message::query()->select( $this->select_columns() )->with( $this->message_relations() )->where( 'id', $id )->first();
        return isset( $message ) ? $this->prepare_message( $message ) : $message;
    }

    protected function message_relations() {
        return [
            'user'               => [Repository::class, 'user_select_query'],
            'user_guest'         => [Repository::class, 'guest_user_select_query'],
            'parent'             => function( Builder $query ) {
                $query->select( $this->select_columns() );
            },
            'parent.user'        => [Repository::class, 'user_select_query'],
            'parent.user_guest'  => [Repository::class, 'guest_user_select_query'],
            'parent.attachment'  => [Repository::class, 'attachment_select_query'],
            'attachment'         => [Repository::class, 'attachment_select_query'],
            'forward.attachment' => [Repository::class, 'attachment_select_query']
        ];
    }

    public function attachment( int $response_id, string $type, int $per_page, int $page, string $search = '' ) {
        $messages_query = Message::query( 'message' )->with(
            [
                'user'              => [Repository::class, 'user_select_query'],
                'user_guest'        => [Repository::class, 'guest_user_select_query'],
                'parent',
                'parent.user'       => [Repository::class, 'user_select_query'],
                'parent.user_guest' => [Repository::class, 'guest_user_select_query'],
                'attachment'        => [Repository::class, 'attachment_select_query']
            ]
        )->where( 'response_id', $response_id )->where( 'status', 'publish' );

        switch ( $type ) {
            case 'link':
                $messages_query->where( 'message', 'regexp', $this->link_regexp() );
                break;
            case 'voice':
                $attachment_exists = $this->media_library_attachment_exists_query();
                $messages_query->where( 'replied_by', 'voice' )->where_exists( $attachment_exists );
                break;
            case 'video':
                $attachment_exists = $this->media_library_attachment_exists_query();
                $messages_query->where_in( 'replied_by',  ['video', 'screen_record'] )->where_exists( $attachment_exists );
                    break;
            default:
                $attachment_exists = $this->media_library_attachment_exists_query();
                $messages_query->where_raw( "(message regexp '{$this->link_regexp()}' or exists ({$attachment_exists->to_sql()}))" );
                break;
        }

        return array_map( [$this, 'prepare_message'] , $messages_query->pagination( $per_page, $page ) );
    }

    protected function link_regexp() {
        return apply_filters( "helpgent_message_link_regexp", "(http(s)?://|www\.)[a-zA-Z0-9./?=&%-]+" );
    }

    protected function media_library_attachment_exists_query():Builder {
        return Attachment::query( 'attachment' )->select( 1 )->where_column( 'attachment.id', 'message.attachment_id' )->limit( 1 );
    }

    protected function select_columns() {
        $removed_message = esc_html__( "This message was removed.", "helpgent" );

        return "id, response_id, attachment_id, is_read, is_guest, created_by, replied_by, agent_trigger, parent_id, forward_id, updated_at, status, created_at,
            CASE 
                WHEN status = 'trash' THEN '{$removed_message}' 
                ELSE message 
            END AS message";
    }

    private function prepare_message( stdClass &$message ) {
        if ( isset( $message->user->user_email ) ) {
            $avatar_url                = get_avatar_url( $message->user->user_email );
            $message->user->avatar_url = $avatar_url;
            unset( $message->user->user_email );
        } elseif ( isset( $message->user_guest->email ) ) {
            $avatar_url                      = get_avatar_url( $message->user_guest->email );
            $message->user_guest->avatar_url = $avatar_url;
            unset( $message->user_guest->email );
        }

        if ( ! empty( $message->attachment ) ) {
            $attachment          = Repository::bind_file_url( $message->attachment );
            $message->attachment = $attachment;
        }

        if ( ! empty( $message->forward->attachment ) ) {
            $attachment                   = Repository::bind_file_url( $message->forward->attachment );
            $message->forward->attachment = $attachment;
        }

        if ( ! empty( $message->parent ) ) {
            $this->prepare_message( $message->parent );
        }

        return $message;
    }

    public function create( MessageDTO $message_dto ) {
        $form_response = $this->response_repository->get_by_id( $message_dto->get_response_id() );

        if ( ! $form_response ) {
            throw new Exception( esc_html__( 'Form response not found.', 'helpgent' ), 404 );
        }

        $forward_id = $message_dto->get_forward_id();

        $data = [
            'response_id'   => $message_dto->get_response_id(),
            'is_read'       => $message_dto->get_is_read(),
            'is_guest'      => $message_dto->get_is_guest(),
            'forward_id'    => $forward_id,
            'created_by'    => $message_dto->get_created_by(),
            'agent_trigger' => $message_dto->get_agent_trigger(),
            'status'        => $message_dto->get_status(),
            'replied_by'    => $message_dto->get_replied_by(),
            'created_at'    => helpgent_now()
        ];

        $message = $message_dto->get_message();
        
        if ( 'reply' === $message_dto->get_replied_by() ) {
            $data['message']   = $message;
            $data['parent_id'] = $message_dto->get_parent_id();
            return Message::query()->insert_get_id( $data );
        }

        $attachment_id = $message_dto->get_attachment_id();

        if ( in_array( $message_dto->get_replied_by(), ['video', 'screen_record'] ) ) {

            if ( ! empty( $message ) ) {
                $text_message_data               = $data;
                $text_message_data['message']    = $message_dto->get_message();
                $text_message_data['replied_by'] = 'text';
                Message::query()->insert( $text_message_data );
            }

            $data['attachment_id'] = $attachment_id;

            if ( 0 !== $attachment_id ) {
                $this->response_repository->add_attachment( $message_dto->get_response_id(), $attachment_id );
            }

            return Message::query()->insert_get_id( $data );
        }

        if ( 'voice' === $message_dto->get_replied_by() ) {
            $data['attachment_id'] = $attachment_id;

            if ( 0 !== $attachment_id ) {
                $this->response_repository->add_attachment( $message_dto->get_response_id(), $attachment_id );
            }

        } else {
            $data['message'] = $message;
        }

        if ( 'forward' === $message_dto->get_replied_by() ) {
            /**
             * @var ForwardRepository $forward_repository
             */
            $forward_repository = helpgent_singleton( ForwardRepository::class );
            $forward            = $forward_repository->get_by_id( $forward_id );
        
            if ( $forward && ! empty( $forward->attachment_id ) ) {
                $this->response_repository->add_attachment( $message_dto->get_response_id(), intval( $forward->attachment_id ) );
            }
        }

        return Message::query()->insert_get_id( $data );
    }

    public function update( MessageDTO $message_dto ) {
        $message = Message::query()->where( 'id', $message_dto->get_id() )->where( 'response_id', $message_dto->get_response_id() )->first();

        if ( ! $message ) {
            throw new Exception( esc_html__( "Message not found.", "helpgent" ), 404 );
        }

        $user = helpgent_get_current_user();

        if ( $user->id !== intval( $message->created_by ) || $user->get_is_guest() !== intval( $message->is_guest ) ) {
            throw new Exception( esc_html__( "Sorry, you can't update this message.", "helpgent" ), 500 );
        }

        if ( 0 < $message->attachment_id ) {
            throw new Exception( esc_html__( "Sorry, you can't update the attachment.", "helpgent" ), 500 );
        }

        return Message::query()->where( 'id', $message_dto->get_id() )->where( 'response_id', $message_dto->get_response_id() )->update(
            [
                'message'    => $message_dto->get_message(),
                'updated_at' => helpgent_now()
            ]
        );
    }

    public function update_read_status( int $id, int $response_id, int $is_read ) {
        return Message::query()->where( 'id', $id )->where( 'response_id', $response_id )->update(
            [
                'is_read' => $is_read
            ]
        );
    }

    public function delete( int $id, int $response_id ) {
        $message = Message::query()->where( 'id', $id )->where( 'response_id', $response_id )->first();

        if ( ! $message ) {
            throw new Exception( esc_html__( "Message not found.", "helpgent" ), 404 );
        }

        $user = helpgent_get_current_user();

        if ( $user->id !== intval( $message->created_by ) || $user->get_is_guest() !== intval( $message->is_guest ) ) {
            throw new Exception( esc_html__( "Sorry, you can't delete this message.", "helpgent" ), 500 );
        }

        /**
         * @var ForwardRepository $forward_repository
         */
        $forward_repository = helpgent_singleton( ForwardRepository::class );

        $attachment_id = intval( $message->attachment_id );

        if ( 0 !== $attachment_id && ! $forward_repository->get_by_attachment_id_first( $attachment_id ) ) {
            Repository::delete_attachment( $attachment_id );
        }

        $delete = Message::query()->where( 'id', $id )->where( 'response_id', $response_id )->update(
            [
                'status'        => 'trash',
                'message'       => '',
                'parent_id'     => 0,
                'attachment_id' => 0,
                'forward_id'    => 0
            ]
        );

        $forward_id = intval( $message->forward_id );

        if ( 0 !== $forward_id ) {
            /**
             * @var ForwardRepository $forward_repository
             */
            $forward_repository = helpgent_singleton( ForwardRepository::class );
            $forward            = $forward_repository->get_by_id( $forward_id );

            if ( ! empty( $forward->attachment_id ) ) {
                $attachment_id = intval( $forward->attachment_id );
            }

            $forward_repository->delete( $forward_id );
        }

        if ( 0 !== $attachment_id ) {
            /**
             * Remove attachment read permission if attachment message not exist in this response
             */
            $message = Message::query( "message" )->select( 1 )->where( 'response_id', $response_id )
            ->left_join( "helpgent_message_forwards", "message.forward_id", "=","helpgent_message_forwards.id" )
            ->where_raw( "(message.attachment_id = {$attachment_id} or helpgent_message_forwards.attachment_id = {$attachment_id})" )
            ->first();

            if ( empty( $message ) ) {
                $this->response_repository->delete_attachment( $response_id, $attachment_id );
            }
        }

        return $delete;
    }

    public function get_by_id( int $id ) {
        return Message::query()->where( 'id', $id )->first();
    }

    public function get_by_forward_id_first( int $forward_id ) {
        return Message::query()->where( 'forward_id', $forward_id )->first();
    }

    public function get_by_attachment_id_first( int $attachment_id ) {
        return Message::query()->where( 'attachment_id', $attachment_id )->first();
    }
}