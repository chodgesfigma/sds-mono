import { Component, Listen, Prop, State, h } from '@stencil/core';
import { DefaultVariant } from 'src/components';

@Component({
  tag: 'sds-dialog-button',
  styleUrl: 'sds-dialog-button.scss',
  shadow: true,
})
export class SdsDialogButton {
  @State() isModalOpen = false;

  @Prop() useIcon = false;

  @Prop() label = '';

  @Prop() variant: DefaultVariant = 'primary';

  @Listen('sds-close-dialog')
  handleCloseDialog() {
    this.closeDialog();
  }

  openDialog = () => {
    this.isModalOpen = true;
  };

  closeDialog = () => {
    this.isModalOpen = false;
  };

  render() {
    return (
      <sds-dialog-trigger>
        <sds-button onClick={this.openDialog} aria-label={this.label} class="icon-button">
          <slot name="icon"></slot>
        </sds-button>
        {!this.useIcon && (
          <sds-button onClick={this.openDialog} variant={this.variant}>
            {this.label}
          </sds-button>
        )}
        {this.isModalOpen && (
          <sds-dialog-modal>
            <sds-dialog>
              <slot></slot>
            </sds-dialog>
          </sds-dialog-modal>
        )}
      </sds-dialog-trigger>
    );
  }
}
