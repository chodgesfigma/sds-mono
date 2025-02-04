import { Component, Prop, h } from '@stencil/core';
import { ButtonSize, ButtonType, ButtonVariant } from './SdsButtonBase';

@Component({
  tag: 'sds-button',
  styleUrl: 'SdsButton.scss',
  shadow: true,
})
export class SdsButton {
  /**
   * The button type
   */
  @Prop() type: ButtonType = 'button';
  /**
   * The button size
   */
  @Prop() size: ButtonSize = 'medium';
  /**
   * The button variant
   */
  @Prop() variant: ButtonVariant = 'primary';

  render() {
    return (
      <sds-button-base variant={this.variant} size={this.size} type={this.type}>
        <slot />
      </sds-button-base>
    );
  }
}
