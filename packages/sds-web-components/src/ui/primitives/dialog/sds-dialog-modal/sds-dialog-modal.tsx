import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-dialog-modal',
  styleUrl: 'sds-dialog-modal.scss',
  shadow: true,
})
export class SdsDialogModal {
  // @Prop() isDismissable = false;
  render() {
    return (
      <div class="dialog-backdrop">
        <div class="dialog-container">
          <slot></slot>
        </div>
      </div>
    );
  }
}
