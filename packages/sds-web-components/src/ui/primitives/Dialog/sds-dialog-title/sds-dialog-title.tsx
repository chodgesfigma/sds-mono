import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-dialog-title',
  styleUrl: 'sds-dialog-title.scss',
  shadow: true,
})
export class SdsDialogTitle {
  render() {
    return (
      <sds-text-heading class="dialog-title" slot="title">
        <slot></slot>
      </sds-text-heading>
    );
  }
}
