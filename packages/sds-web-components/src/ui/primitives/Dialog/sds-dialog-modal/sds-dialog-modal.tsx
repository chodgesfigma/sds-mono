import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sds-dialog-modal',
  styleUrl: 'sds-dialog-modal.scss',
  shadow: true,
})
export class SdsDialogModal {
  /**
   * Open state of the dialog
   */
  @Prop({ reflect: true }) isOpen = false;

  render() {
    if (!this.isOpen) {
      return null;
    }

    return (
      <div class="dialog-backdrop">
        <div class="dialog-container">
          <slot />
        </div>
      </div>
    );
  }
}
