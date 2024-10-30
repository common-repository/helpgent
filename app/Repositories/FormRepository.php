<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\DTO\FormDTO;
use HelpGent\App\Models\Form;
use HelpGent\App\Models\FormMeta;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Models\Tag;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\Database\Query\Builder;
use HelpGent\WpMVC\Database\Query\JoinClause;

class FormRepository {
    const DEMOMEDIAOPTIONKEY = 'helpgent_demo_medias';

    public function get( int $per_page, int $page, string $search, string $sort, string $status, string $date_type = 'all', array $date_frame = [], string $type = 'admin_forms' ) {

        $forms_query = Form::query( "form" )->left_join( "users as user", "user.ID", "form.created_by" );

        /**
         * Search forms
         */
        if ( ! empty( $search ) ) {
            global $wpdb;
            $search       = "%{$search}%";
            $search_query = $wpdb->prepare( "(form.title like %s or user.user_nicename like %s)", $search, $search );
            $forms_query->where_raw( $search_query );
        }

        /**
         * Filter by date
         */
        if ( 'all' !== $date_type ) {
            $this->forms_date_query( $forms_query, $date_type, $date_frame );
        }

        $forms_count_query = clone $forms_query;

        if ( ! empty( $status ) && 'all' !== $status ) {
            $forms_query->where( 'form.status', $status );
        }

        $columns          = ['form.id', 'form.title', 'form.status', 'form.created_at', 'form.updated_at', 'form.content', 'user.user_nicename as username', 'COUNT(DISTINCT CASE WHEN response.is_read = 0 THEN response.id ELSE NULL END) AS total_unread'];
        $group_by_columns = ['form.id', 'form.title', 'form.status', 'form.created_at', 'form.updated_at', 'form.content', 'user.user_nicename'];

        $forms_query->select( $columns )->with_count(
            'responses as total_responses', function( Builder $query ) {
                $query->where( "{$query->as}.is_archive", 0 );
            }
        )->left_join( 'helpgent_responses as response', 'form.id', 'response.form_id' )->group_by( $group_by_columns );

        if ( ! empty( $sort ) ) {
            switch ( $sort ) {
                case 'last_modified':
                    $forms_query->order_by_desc( 'form.updated_at' );
                    break;
                case 'alphabetical':
                    $forms_query->order_by_raw( 'form.title asc, form.id desc' );
                    break;
                case 'last_submission':
                    $forms_query->left_join(
                        'helpgent_responses as max_response', function( JoinClause $join ) {
                            $join->select( 'max_response.form_id', 'MAX(max_response.id) AS max_id' )->on_column( 'response.form_id', 'max_response.form_id' )->on_column( 'response.id', 'max_response.max_id' );
                        }
                    )->order_by_desc( 'response.id' );
                    break;
                case 'unread':
                    $forms_query->left_join(
                        'helpgent_responses as unread_old_response', function( JoinClause $join ) {
                            $join->select( 'unread_old_response.form_id', 'MIN(unread_old_response.created_at) AS old_created_at' )->on_column( 'response.form_id', 'unread_old_response.form_id' )->on_column( 'response.created_at', 'unread_old_response.old_created_at' );
                        }
                    )->order_by_raw(
                        "CASE
                        WHEN response.is_read = 0 THEN 1
                        WHEN response.is_read = 1 THEN 2
                        ELSE 3
                    END, form.id desc"
                    );
                    break;
                case 'date_created':
                default:
                    $forms_query->order_by_desc( 'form.id' );
            }
        } else {
            $forms_query->order_by_desc( 'form.id' );
        }

        /**
         * @var Builder $forms_query
         */
        $forms_query    = apply_filters( 'helpgent_form_query', $forms_query, $type );
        $join_form_meta = apply_filters( 'helpgent_form_query_join_meta', false );

        /**
         * Join form meta if joining allowed form filter hook
         */
        if ( $join_form_meta ) {
            $forms_query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "form.id" );
            $forms_count_query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "form.id" );
        }

        /**
         * @var Builder $forms_count_query
         */
        $forms_count_query = apply_filters( 'helpgent_form_count_query', $forms_count_query, $type );

        $preview_url = get_site_url( null, "helpgent/" );
        $forms       = array_map(
            function( $form ) use( $preview_url ) {
                $form = Repository::bind_form_featured_image( $form );
                unset( $form->content );

                $form->preview_url = $preview_url . $form->id;
                return $form;
            }, $forms_query->pagination( $per_page, $page )
        );

        if ( ! empty( $status ) && 'all' !== $status ) {
            $status_total_query = clone $forms_count_query;

            $status_total = $status_total_query->select( 'form.status', 'COUNT(DISTINCT form.id) as total' )->group_by( 'form.status' )->get();
            $total        = $forms_count_query->where( 'form.status', $status )->count( 'form.id' );
        } else {
            $status_total = $forms_count_query->select( 'form.status', 'COUNT(DISTINCT form.id) as total' )->group_by( 'form.status' )->get();
            $total        = array_sum( array_column( $status_total, 'total' ) );
        }

        return apply_filters(
            'helpgent_get_forms', [
                'total'         => $total,
                'status_totals' => $status_total,
                'forms'         => $forms
            ], $type
        );
    }

    protected function forms_date_query( Builder $query, string $date_type, array $date_frame ) {
        $now              = helpgent_now();
        $from_date_format = "Y-m-d 00:00:01";
        $to_date_format   = "Y-m-d 23:59:59";

        if ( 'today' === $date_type ) {
            $today = $now->format( $from_date_format );
            return $query->where_raw( "((form.updated_at is not null and form.updated_at > '{$today}') or (form.updated_at is null and form.created_at > '{$today}'))" );
        }

        if ( 'date_frame' === $date_type ) {
            /**
             * Checking if the date is valid and the date format is correct.
             */
            if ( empty( $date_frame['from'] ) ||
                ! is_string( $date_frame['from'] ) ||
                empty( $date_frame['to'] ) || 
                ! is_string( $date_frame['to'] ) ||
                ! helpgent_is_valid_date( $date_frame['from'], $from_date_format ) ||
                ! helpgent_is_valid_date( $date_frame['to'], $to_date_format )
            ) {
                return $query;
            }

            $form = sanitize_text_field( $date_frame['from'] );
            $to   = sanitize_text_field( $date_frame['to'] );
        } else {
            switch ( $date_type ) {
                case 'yesterday':
                    $date = $now->sub_days( 1 );
                    break;
                case 'last_week':
                    $date = $now->sub_days( 6 );
                    break;
                case 'last_month':
                    $date = $now->sub_days( 30 );
            }
            $form = $date->format( $from_date_format );
            $to   = helpgent_now()->format( $to_date_format );
        }

        return $query->where_raw( "((form.updated_at is not null and form.updated_at > '{$form}' and form.updated_at < '{$to}') or (form.updated_at is null and form.created_at > '{$form}' and form.created_at < '{$to}'))" );
    }

    public function select_list( int $per_page, int $page, string $search = '', $ids = [] ) {
        $query = Form::query( 'form' );

        if ( ! empty( $ids ) ) {
            $query->where_in( 'id', $ids );
        } elseif ( ! empty( $search ) ) {
            $query->where( 'title', 'like', "%{$search}%" );
        }

        $columns = ['form.id', 'form.title'];

        $query->select( $columns )->group_by( $columns )->order_by_desc( 'form.id' );

        /**
         * @var Builder $query
         */
        $query          = apply_filters( 'helpgent_form_select_list_query', $query, $per_page, $page, $search, $ids );
        $join_form_meta = apply_filters( 'helpgent_form_select_query_join_meta', false );

        if ( $join_form_meta ) {
            $query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "form.id" );
        }

        return $query->pagination( $per_page, $page );
    }

    public function get_single( int $id ) {
        $columns = ['form.id', 'form.title', 'form.status','form.content', 'form.draft', 'form.is_chat_bubble', 'form.available_pages'];

        $query = Form::query( 'form' )->select( $columns )->where( 'form.id', $id )->group_by( $columns );

        /**
         * @var Builder $query
         */
        $query          = apply_filters( 'helpgent_single_form_query', $query );
        $join_form_meta = apply_filters( 'helpgent_single_form_query_join_meta', false );

        if ( $join_form_meta ) {
            $query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "form.id" );
        }

        $form = $query->first();

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }
        $form->preview_url     = get_site_url( null, "helpgent/{$form->id}" );
        $form->available_pages = json_decode( $form->available_pages );
        return $form;
    }

    public function create( FormDTO $form_dto ) {
        $form_id = Form::query()->insert_get_id(
            [
                'title'           => $form_dto->get_title(),
                'status'          => $form_dto->get_status(),
                'content'         => $form_dto->get_content(),
                'font_family'     => $this->get_font_family( $form_dto ),
                'is_chat_bubble'  => $form_dto->get_is_chat_bubble(),
                'available_pages' => wp_json_encode( $form_dto->get_available_pages() ),
                'created_by'      => $form_dto->get_created_by()
            ]
        );

        $this->add_meta( $form_id, 'color', 'rgb(' . rand( 0, 255 ) . ',' . rand( 0, 255 ) . ',' . rand( 0, 255 ) . ')' );

        return $form_id;
    }

    public function update( FormDTO $form_dto ) {
        $form = $this->get_by_id( $form_dto->get_id() );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        return Form::query()->where( 'id', $form_dto->get_id() )->update(
            [
                'title'           => $form_dto->get_title(),
                'status'          => $form_dto->get_status(),
                'content'         => $form_dto->get_content(),
                'draft'           => $form_dto->get_draft(),
                'is_chat_bubble'  => $form_dto->get_is_chat_bubble(),
                'font_family'     => $this->get_font_family( $form_dto ),
                'available_pages' => wp_json_encode( $form_dto->get_available_pages() ),
                'updated_at'      => helpgent_now()
            ]
        );
    }

    protected function get_font_family( FormDTO $form_dto ) {
        $form_content = json_decode( $form_dto->get_content(), true );
        return ! empty( $form_content['global']['font_family']['family'] ) ? $form_content['global']['font_family']['family'] : null;
    }

    public function update_status( int $id, string $status ) {
        $form = $this->get_by_id( $id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        return Form::query()->where( 'id', $id )->update(
            [
                'status' => $status
            ]
        );
    }

    public function update_title( int $id, string $title ) {
        $form = $this->get_by_id( $id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        return Form::query()->where( 'id', $id )->update(
            [
                'title' => $title
            ]
        );
    }

    public function update_content( int $id, string $content ) {
        return Form::query()->where( 'id', $id )->update(
            [
                'content' => $content
            ]
        );
    }
    
    public function update_draft( int $id, string $content ) {
        return Form::query()->where( 'id', $id )->update(
            [
                'draft' => $content
            ]
        );
    }

    public function delete( int $id ) {
        $form = $this->get_by_id( $id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        Form::query()->where( 'id', $id )->delete();

        $this->delete_metas( [$id] );
        $this->delete_responses( [$id] );
        $this->delete_answers( [$id] );
        $this->delete_tags( [$id] );
        $this->after_delete_form();

        return $form;
    }

    public function deletes( array $ids ) {
        $forms = $this->get_by_ids( $ids );

        if ( ! $forms ) {
            throw new Exception( esc_html__( 'Forms not found.', 'helpgent' ), 404 );
        }

        Form::query()->where_in( 'id', $ids )->delete();

        $this->delete_metas( $ids );
        $this->delete_responses( $ids );
        $this->delete_answers( $ids );
        $this->delete_tags( $ids );
        $this->after_delete_form();

        return $forms;
    }

    public function update_bulk_status( array $ids, string $status ) {
        return Form::query()->where_in( 'id', $ids )->update(
            [
                'status' => $status
            ]
        );
    }

    protected function after_delete_form() {
        Repository::delete_metas_of_unknown_responses();

        Repository::delete_contact_info_of_unknown_answers();
        Repository::delete_address_of_unknown_answers();
        Repository::delete_open_ended_text_inners_of_unknown_answers();

        Repository::delete_messages_of_unknown_responses();
        Repository::delete_responses_tags_of_unknown_tags();
        Repository::delete_unused_forward_messages();
        Repository::delete_response_attachment_of_unknown_responses();
    }

    public function get_by_id( int $id ) {
        return Form::query()->where( 'id', $id )->first();
    }

    public function get_by_ids( array $ids ) {
        return Form::query()->where_in( 'id', $ids )->get();
    }

    public function get_by_id_publish( int $id ) {
        return Form::query()->where( 'id', $id )->where( 'status', 'publish' )->first();
    }

    public function get_bubble_by_page_id( int $page_id ) {
        $columns = ['form.id', 'form.content'];
        $query   = Form::query( 'form' )->select( $columns )
        ->where( 'form.status', 'publish' )->where( 'is_chat_bubble', 1 )
        ->where_raw( "(JSON_LENGTH(form.available_pages) = 0 or JSON_CONTAINS( JSON_UNQUOTE(JSON_EXTRACT(form.available_pages, '$')), JSON_QUOTE('{$page_id}'), '$'))" )
        ->group_by( $columns );

        /**
         * @var Builder $query
         */
        $query     = apply_filters( 'helpgent_chat_bubble_form_query', $query );
        $join_meta = apply_filters( 'helpgent_chat_bubble_form_query_join_meta', false );

        if ( $join_meta ) {
            $query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "form.id" );
        }

        return $query->get();
    }

    public function get_meta( int $form_id, string $meta_key ) {
        return FormMeta::query()->where( 'form_id', $form_id )->where( 'meta_key', $meta_key )->first();
    }

    public function get_meta_value( int $form_id, string $meta_key ) {
        $meta = $this->get_meta( $form_id, $meta_key );
        if ( ! $meta ) {
            return false;
        }
        return $meta->meta_value;
    }

    public function add_meta( int $form_id, string $meta_key, string $meta_value ) {
        $meta = $this->get_meta( $form_id, $meta_key );

        if ( $meta ) {
            return false;
        }

        return FormMeta::query()->insert(
            [
                'form_id'    => $form_id,
                'meta_key'   => $meta_key,
                'meta_value' => $meta_value,
            ]
        );
    }

    public function update_meta( int $form_id, string $meta_key, string $meta_value ) {

        $update = FormMeta::query()->where( 'form_id', $form_id )->where( 'meta_key', $meta_key )->update(
            [
                'meta_value' => $meta_value,
            ]
        );

        if ( $update ) {
            return $update;
        }

        return FormMeta::query()->insert(
            [
                'form_id'    => $form_id,
                'meta_key'   => $meta_key,
                'meta_value' => $meta_value,
            ]
        );
    }

    public function delete_meta( int $form_id, string $meta_key ) {
        return FormMeta::query()->where( 'form_id', $form_id )->where( 'meta_key', $meta_key )->delete();
    }

    public function insert_media( string $attachment_url ) {
        $demo_attachments = $this->get_demo_attachments();

        /**
         * Return attachment if from cache if exists
         */
        if ( ! empty( $demo_attachments[$attachment_url] ) ) {
            $id         = $demo_attachments[$attachment_url];
            $attachment = wp_get_attachment_url( $id, );

            if ( is_string( $attachment_url ) ) {
                return [
                    'id'  => $id,
                    'url' => $attachment_url
                ];
            }
        }

        $response = wp_remote_get(
            $attachment_url, [
                [
                    'timeout' => 30
                ]
            ]
        );

        if ( is_wp_error( $response ) ) {
            $error_code    = $response->get_error_code();
            $response_code = 500;

            if ( is_string( $error_code ) ) {
                if ( 'http_request_failed' === $error_code ) {
                    $response_code = 495;
                }
            } else {
                $response_code = $error_code;
            }
            throw new Exception( $response->get_error_message(), $response_code );
        }

        $response_code = intval( wp_remote_retrieve_response_code( $response ) );

        if ( 200 !== $response_code ) {
            throw new Exception( wp_remote_retrieve_response_message( $response ), $response_code );
        }

        $file_name = wp_basename( $attachment_url );
        $upload    = wp_upload_bits( $file_name, '', wp_remote_retrieve_body( $response ) );

        if ( ! empty( $upload['error'] ) ) {
            throw new Exception( $upload['error'], 500 );
        }

        $attachment = [
            'post_title'     => $file_name,
            'post_type'      => 'attachment',
            'post_mime_type' => $upload['type'],
            'guid'           => $upload['url']
        ];

        $id = wp_insert_attachment( $attachment, $upload['file'] );

        if ( is_wp_error( $id ) ) {
            throw new Exception( $id->get_error_message(), $id->get_error_code() );
        }

        if ( ! function_exists( 'wp_generate_attachment_metadata' ) ) {
            include_once ABSPATH . 'wp-admin/includes/image.php';
        }

        if ( ! function_exists( 'wp_read_video_metadata' ) ) {
            include_once ABSPATH . 'wp-admin/includes/media.php';
        }

        wp_update_attachment_metadata( $id, wp_generate_attachment_metadata( $id, $upload['file'] ) );

        /**
         * Caching the inserted attachment url and id
         */
        $demo_attachments[$attachment_url] = $id;

        $this->update_demo_attachments( $demo_attachments );

        return [
            'id'  => $id,
            'url' => $upload['url']
        ];
    }

    public function get_demo_attachments():array {
        return get_option( self::DEMOMEDIAOPTIONKEY, [] );
    }

    public function update_demo_attachments( array $demo_attachments ) {
        return update_option( self::DEMOMEDIAOPTIONKEY, $demo_attachments );
    }

    public function delete_demo_attachment_by_id( int $attachment_id ) : void {
        $attachments = array_filter(
            $this->get_demo_attachments(), function ( $value ) use ( $attachment_id ) {
                return $value !== $attachment_id;
            }
        );

        $this->update_demo_attachments( $attachments );
    }

    public function delete_responses( array $form_ids ) {
        $form_ids = implode( ',', map_deep( $form_ids, 'intval' ) );
        global $wpdb;
        return $wpdb->query(
            $wpdb->prepare(
                "DELETE response, helpgent_response_attachment FROM {$wpdb->prefix}helpgent_responses AS response
        LEFT JOIN {$wpdb->prefix}helpgent_response_attachment AS helpgent_response_attachment
        ON response.id = helpgent_response_attachment.response_id
        WHERE response.form_id in ({$form_ids});" //phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
            )
        );
    }

    public function delete_metas( array $form_ids ) {
        return FormMeta::query()->where_in( 'form_id', $form_ids )->delete();
    }

    public function delete_tags( array $form_ids ) {
        return Tag::query()->where_in( 'form_id', $form_ids )->delete();
    }

    public function delete_answers( array $form_ids ) {
        return ElementAnswers::query( "answer" )->where_in( "answer.form_id", $form_ids )->delete();
    }
}