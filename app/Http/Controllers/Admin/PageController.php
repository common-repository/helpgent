<?php

namespace HelpGent\App\Http\Controllers\Admin;

use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Models\Post;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class PageController extends Controller {
    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'ids'    => 'array',
                'search' => 'string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $page = Post::query()->select( 'ID as id, post_title as title' )->where( 'post_type', 'page' )->where( 'post_status', 'publish' )->order_by_desc( 'id' );
            
        if ( $wp_rest_request->has_param( 'ids' ) ) {
            $ids = map_deep( $wp_rest_request->get_param( 'ids' ), 'intval' );
            $page->where_in( 'ID', $ids );
        } elseif ( $wp_rest_request->has_param( 'search' ) ) {
            $page->where( 'post_title', 'like', "%{$wp_rest_request->get_param('search')}%" )->limit( 10 );
        } else {
            $page->limit( 10 );
        }

        $pages = $page->get();

        if ( ! empty( $pages ) ) {
            $pages = array_map( fn( $item ) => [ 'value' => $item->id, 'label' =>  $item->title ], $pages );
        } else {
            $pages = [];
        }
    
        return Response::send( $pages );
    }

    public function index_with_homepage( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'ids'    => 'array',
                'search' => 'string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $page = Post::query()->select( 'ID as id, post_title as title' )->where( 'post_type', 'page' )->where( 'post_status', 'publish' )->order_by_desc( 'id' );
            
        if ( $wp_rest_request->has_param( 'ids' ) ) {
            $ids = map_deep( $wp_rest_request->get_param( 'ids' ), 'intval' );
            $page->where_in( 'ID', $ids );
        } elseif ( $wp_rest_request->has_param( 'search' ) ) {
            $page->where( 'post_title', 'like', "%{$wp_rest_request->get_param('search')}%" )->limit( 10 );
        } else {
            $page->limit( 10 );
        }

        $pages = $page->get();

        $has_search = $wp_rest_request->has_param( 'search' );

        if ( ! $has_search || $has_search && $this->like_match( "%{$wp_rest_request->get_param('search')}%", 'Home Page' ) ) {
            $pages = array_merge( [ (object) [ 'id' => '0', 'title' => 'Home Page', ]], $pages );
        }

        if ( ! empty( $pages ) ) {
            $pages = array_map( fn( $item ) => [ 'value' => $item->id, 'label' =>  $item->title ], $pages );
        } else {
            $pages = [];
        }
    
        return Response::send( $pages );
    }

    public function like_match( $pattern, $subject ) {
        $pattern = str_replace( '%', '.*', preg_quote( $pattern, '/' ) );
        return (bool) preg_match( "/^{$pattern}$/i", $subject );
    }
}