<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\DTO\TagDTO;
use HelpGent\App\Models\Tag;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\Database\Query\Builder;

class TagRepository {
    public FormRepository $form_repository;

    public function __construct( FormRepository $form_repository ) {
        $this->form_repository = $form_repository;
    }

    public function get( int $per_page, int $page, string $search ) {
        $columns       = ['tag.id', 'tag.title', 'tag.color', 'tag.form_id', 'form.title as form_title', 'form.id as form_id', 'COUNT(response_tag.response_id) AS total_response', 'tag.created_at'];
        $group_columns = ['tag.id', 'tag.title', 'tag.color', 'tag.form_id', 'tag.created_at'];

        $query = Tag::query( 'tag' )->left_join( 'helpgent_forms as form', 'tag.form_id', '=', 'form.id' );

        if ( ! empty( $search ) ) {
            $query->where( 'tag.title', 'like', "%{$search}%" )->or_where( 'form.title', 'like', "%{$search}%" );
        }

        /**
         * @var Builder $query
         */
        $query = apply_filters( "helpgent_tags_query", $query, $per_page, $page, $search );

        $join_form_meta = apply_filters( 'helpgent_tag_query_join_form_meta', false );

        if ( $join_form_meta ) {
            $query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "tag.form_id" );
        }

        $count_query = clone $query;

        $query->select( $columns )->left_join( 'helpgent_response_tag as response_tag', 'tag.id', '=', 'response_tag.tag_id' )
        ->group_by( $group_columns )->order_by_desc( 'tag.id' );

        return [
            'total' => $count_query->distinct()->count( 'tag.id' ),
            'tags'  => $query->pagination( $per_page, $page )
        ];
    }

    public function create( TagDTO $tag_dto ) {

        $tag = Tag::query()->select( 'id, title, color' )->where( 'title', $tag_dto->get_title() )->where( 'form_id', $tag_dto->get_form_id() )->first();

        if ( $tag ) {
            $data = [
                'message' => sprintf( esc_html__( '%s tag already exists.', 'helpgent' ), $tag_dto->get_title() ),
                'tag'     => $tag
            ];
            throw new Exception( json_encode( $data ), 500 );
        }

        $form = $this->form_repository->get_by_id( $tag_dto->get_form_id() );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        return Tag::query()->insert_get_id(
            [
                'title'      => $tag_dto->get_title(),
                'color'      => $tag_dto->get_color(),
                'form_id'    => $tag_dto->get_form_id(),
                'created_by' => $tag_dto->get_created_by()
            ]
        );
    }

    public function update( TagDTO $tag_dto ) {

        $tag = $this->get_by_id( $tag_dto->get_id() );

        if ( ! $tag ) {
            throw new Exception( esc_html__( 'Tag not found.', 'helpgent' ), 404 );
        }

        $form = $this->form_repository->get_by_id( $tag_dto->get_form_id() );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        $tag = Tag::query()->where( 'title', $tag_dto->get_title() )->where( 'form_id', $tag_dto->get_form_id() )->first();

        if ( $tag && $tag->id != $tag_dto->get_id() ) {
            throw new Exception( sprintf( esc_html__( '%s tag already exists.', 'helpgent' ), $tag_dto->get_title() ), 500 );
        }

        return Tag::query()->where( 'id', $tag_dto->get_id() )->update(
            [
                'title'      => $tag_dto->get_title(),
                'color'      => $tag_dto->get_color(),
                'updated_at' => helpgent_now()
            ]
        );
    }

    public function get_by_form_id( int $form_id ) {
        return Tag::query()->select( 'id, title, color' )->where( 'form_id', $form_id )->get();
    }

    public function delete( int $id ) {
        $tag = $this->get_by_id( $id );

        if ( ! $tag ) {
            throw new Exception( esc_html__( 'Tag not found.', 'helpgent' ), 404 );
        }

        $delete = Tag::query()->where( 'id', $id )->delete();

        Repository::delete_responses_tags_of_unknown_tags();

        return $delete;
    }

    public function get_by_id( int $id ) {
        return Tag::query()->where( 'id', $id )->first();
    }
}