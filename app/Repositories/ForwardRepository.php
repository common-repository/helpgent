<?php

namespace HelpGent\App\Repositories;

use HelpGent\App\DTO\MessageForwardDTO;
use HelpGent\App\Models\MessageForward;
use HelpGent\App\Models\Guest;
use HelpGent\App\Models\Response;
use HelpGent\App\Models\User;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\Database\Query\Builder;
use stdClass;

class ForwardRepository {
    public function create( MessageForwardDTO $message_forward_dto ) {
        return MessageForward::query()->insert_get_id(
            [
                'message'       => $message_forward_dto->get_message(),
                'attachment_id' => $message_forward_dto->get_attachment_id()
            ]
        );
    }

    public function update( MessageForwardDTO $message_forward_dto ) {
        return MessageForward::query()->where( 'id', $message_forward_dto->get_id() )->update(
            [
                'message'       => $message_forward_dto->get_message(),
                'attachment_id' => $message_forward_dto->get_attachment_id(),
                'updated_at'    => helpgent_now()
            ]
        );
    }

    public function users( int $per_page, int $page, string $search = '' ) {
        $current_user = helpgent_get_current_user();
        $users        = User::query()->where( 'ID', '!=', $current_user->id );

        if ( ! empty( $search ) ) {
            $search = "%{$search}%";
            $users->where( 'display_name', 'like', $search )->or_where( 'user_nicename', 'like', $search )->or_where( 'user_email', 'like', $search );
        }

        $users = Repository::user_select_query( $users )->pagination( $per_page, $page, 100, 5 );

        return array_map(
            function( $user ) {
                $user->avatar_url = get_avatar_url( $user->user_email );
                unset( $user->user_email );
                return $user;
            }, $users
        );
    }

    public function responses( int $response_id, int $per_page, int $page, string $search = '', int $created_by = 0, int $is_guest = 0 ) {
        $user  = User::query( 'users' )->select( 1 )->where( 'responses.is_guest', 0 )->where_column( 'users.ID', 'responses.created_by' )->limit( 1 );
        $guest = Guest::query( 'guest' )->select( 1 )->where( 'responses.is_guest', 1 )->where_column( 'guest.id', 'responses.created_by' )->limit( 1 );

        if ( ! empty( $search ) ) {
            $user->where( 'users.display_name', 'like', "%{$search}%" );
            $guest->where( "guest.name", "like", "%{$search}%" );
        }

        $exists_sql = "( exists ( {$user->to_sql()} ) or exists ( {$guest->to_sql()} ) )";

        $responses = Response::query( 'responses' )->where( 'id', '!=', $response_id )
        // ->where( 'is_completed', 1 )
        ->where_raw( $exists_sql );

        if ( 0 !== $created_by ) {
            $responses->where( 'created_by', $created_by )->where( 'is_guest', $is_guest );
        }

        $responses = $responses->with(
            [
                'user'       => [Repository::class, 'user_select_query'],
                'user_guest' => [Repository::class, 'guest_user_select_query'],
                'message'    => function ( Builder $query ) {
                    $query->order_by_desc( 'helpgent_messages.id' );
                }
            ] 
        )->pagination( $per_page, $page, 100, 5 );

        return array_map( [$this, 'prepare_responses'] , $responses );
    }

    private function prepare_responses( stdClass &$response ) {
        if ( isset( $response->user->user_email ) ) {
            $avatar_url                 = get_avatar_url( $response->user->user_email );
            $response->user->avatar_url = $avatar_url;
            unset( $response->user->user_email );
        } elseif ( isset( $response->user_guest->email ) ) {
            $avatar_url                       = get_avatar_url( $response->user_guest->email );
            $response->user_guest->avatar_url = $avatar_url;
            unset( $response->user_guest->email );
        }

        if ( ! empty( $response->parent ) ) {
            $this->prepare_responses( $response->parent );
        }

        return $response;
    }

    public function get_by_message( string $message = '', int $attachment_id = 0 ) {
        return MessageForward::query()->where( 'message', $message )->where( 'attachment_id', $attachment_id )->first();
    }

    public function delete( int $id ) {
        $message_forward = $this->get_by_id( $id );

        if ( ! $message_forward ) {
            return false;
        }

        /**
         * @var MessageRepository $message_repository
         */
        $message_repository = helpgent_singleton( MessageRepository::class );

        if ( $message_repository->get_by_forward_id_first( $id ) ) {
            return false;
        }

        $attachment_id = intval( $message_forward->attachment_id );

        if ( 0 !== $attachment_id && ! $message_repository->get_by_attachment_id_first( $attachment_id ) ) {
            Repository::delete_attachment( intval( $message_forward->attachment_id ) );
        }

        return MessageForward::query()->where( 'id', $message_forward->id )->delete();
    }

    public function get_by_id( int $id ) {
        return MessageForward::query()->where( 'id', $id )->first();
    }

    public function get_by_attachment_id_first( int $attachment_id ) {
        return MessageForward::query()->where( 'attachment_id', $attachment_id )->first();
    }
}
