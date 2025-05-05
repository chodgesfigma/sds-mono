import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-dialog-description',
  styleUrl: 'sds-dialog-description.scss',
  shadow: true,
})
export class SdsDialogDescription {
  render() {
    return (
      <sds-text class="dialog-description">
        <slot></slot>
      </sds-text>
    );
  }
}
