<?php defined( 'ABSPATH' ) || exit; ?>

<div style="display: flex; justify-content: space-between; align-items: center;" class="notice notice-warning helpgent-migration-approval-notice">
    <div class="helpgent-notice-content">
        <h3>
            HelpGent - Database Migration is Required
        </h3>
        <p>
            The latest update includes some major changes to the plugin, so a database migration is required in order to run your application properly
        </p>
    </div>

    <div class="helpgent-notice-action" style="">
        <a class="button button-primary" href="<?php echo esc_url( $action_link ); ?>">
            <?php esc_html_e( 'Run Migration', 'helpgent' ); ?>
        </a>
    </div>
</div>