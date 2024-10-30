<?php defined( 'ABSPATH' ) || exit; ?>

<div class="notice notice-error is-dismissible helpgent-old-pro-remove-notice" style="display: flex; flex-wrap:wrap; justify-content:space-between">
    <p style="display: flex; align-items: center;">
        The current version of your&nbsp;<strong>HelpGent Pro is not compatible with HelpGent</strong>. To ensure compatibility and access new features,&nbsp;<strong>update HelpGent Pro to version 2.0 or later</strong>.
    </p>
</div>
<script>
    jQuery(($) => {
        $('.helpgent-old-pro-remove-notice').on('click', '.notice-dismiss', function() {
            $.ajax( {
                url: helpgent_localization.rest_url + '/admin/close-old-pro-removed-notice',
                method: 'POST',
                beforeSend: function ( xhr ) {
                    xhr.setRequestHeader( 'X-WP-Nonce', helpgent_localization.rest_nonce);
                },
            } );
        } );
    } )
</script>
