import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sds-dialog-trigger',
  styleUrl: 'sds-dialog-trigger.scss',
  shadow: true,
})
export class SdsDialogTrigger {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
