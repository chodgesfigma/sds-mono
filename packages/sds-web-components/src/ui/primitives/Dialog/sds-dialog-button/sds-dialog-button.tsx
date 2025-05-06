import { Component, Listen, Method, Prop, State, h } from '@stencil/core';
import { DefaultVariant } from 'src/components';

@Component({
  tag: 'sds-dialog-button',
  styleUrl: 'sds-dialog-button.scss',
  shadow: true,
})
export class SdsDialogButton {
  @State() isModalOpen = false;

  /**
   * Controls if the icon-button should be used over the label button
   */
  @Prop() useIcon = false;

  /**
   * Label / Aria-label for the button
   */
  @Prop() label = '';

  /**
   * Label Button variant
   */
  @Prop() variant: DefaultVariant = 'primary';

  @Listen('sds-close-dialog')
  handleCloseDialog() {
    this.closeDialog();
  }

  /**
   * Opens the dialog
   */
  @Method()
  async openDialog() {
    this.isModalOpen = true;
  }

  /**
   * Closes the dialog
   */
  @Method()
  async closeDialog() {
    this.isModalOpen = false;
  }

  render() {
    return (
      <sds-dialog-trigger>
        <sds-icon-button onClick={() => this.openDialog()} ariaLabel={this.label} class="icon-button">
          <slot name="icon"></slot>
        </sds-icon-button>
        {!this.useIcon && (
          <sds-button onClick={() => this.openDialog()} variant={this.variant}>
            {this.label}
          </sds-button>
        )}
        <sds-dialog-modal isOpen={this.isModalOpen}>
          <sds-dialog>
            <slot></slot>
          </sds-dialog>
        </sds-dialog-modal>
      </sds-dialog-trigger>
    );
  }
}
