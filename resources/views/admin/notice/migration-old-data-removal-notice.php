<?php defined( 'ABSPATH' ) || exit; ?>

<div style="display: flex; justify-content: space-between; align-items: center;" class="notice notice-success helpgent-migration-approval-notice">
    <div class="helpgent-notice-content">
        <h3>
            HelpGent - Database Migration has been Completed
        </h3>
        <p>
            The database has been migrated successfully. Now you can delete the backup data, but before you do that, <strong>make sure</strong> if all the has been migrated successfully or not.
        </p>
    </div>

    <div class="helpgent-notice-action">
        <a class="button button-danger" style="background: red; color: #fff; border-color: red;" href="<?php echo esc_url( $action_link ); ?>">
            <?php esc_html_e( 'Delete Backup Data', 'helpgent' ); ?>
        </a>
    </div>
</div>