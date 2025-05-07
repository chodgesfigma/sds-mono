import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import clsx from 'clsx';

export type NotificationVariant = 'message' | 'alert';

@Component({
  tag: 'sds-notification',
  styleUrl: 'sds-notification.scss',
  shadow: true,
})
export class SdsNotification {
  /**
   * Allows the notification to be dismissed
   */
  @Prop() isDismissible = false;

  /**
   * Visual variant of the alert
   */
  @Prop() variant: NotificationVariant = 'message';

  /**
   * Emitted when the notification is dismissed
   */
  @Event({
    eventName: 'sds-dismiss',
  })
  dismiss!: EventEmitter;

  handleDismiss = () => {
    this.dismiss.emit();
  };

  render() {
    const classNames = clsx('notification', `notification-variant-${this.variant}`);
    return (
      <div class={classNames}>
        <slot name="icon" />
        <div class="notification-content">
          <slot />
        </div>
        {this.isDismissible &&
          (this.variant === 'alert' ? (
            <sds-destructive-icon-button size="small" variant="danger-subtle" ariaLabel="Dismiss notification" onClick={this.handleDismiss}>
              <sds-icon-x />
            </sds-destructive-icon-button>
          ) : (
            <sds-icon-button size="small" variant="subtle" ariaLabel="Dismiss notification" onClick={this.handleDismiss}>
              <sds-icon-x />
            </sds-icon-button>
          ))}
      </div>
    );
  }
}
