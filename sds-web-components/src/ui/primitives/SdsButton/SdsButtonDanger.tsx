import { Component, Prop, h } from '@stencil/core';
import { ButtonType, ButtonSize, ButtonVariant } from './SdsButtonBase';

export type ButtonDanger = Exclude<ButtonVariant, 'primary' | 'subtle' | 'neutral'>;

@Component({
  tag: 'sds-button-danger',
  styleUrl: 'SdsButton.scss',
  shadow: true,
})
export class SdsButtonDanger {
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
  @Prop() variant: ButtonDanger = 'danger-primary';

  render() {
    return (
      <sds-button-base variant={this.variant} size={this.size} type={this.type}>
        <slot />
      </sds-button-base>
    );
  }
}
