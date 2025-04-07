import { type ButtonType, type ButtonSize, type ButtonVariant, SdsButtonBase } from '../sds-button-base';
import { Component, Prop, h } from '@stencil/core';

export type DefaultVariant = Exclude<ButtonVariant, 'danger-primary' | 'danger-subtle'>;

@Component({
  tag: 'sds-button',
  styleUrl: '../sds-button-base.scss',
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
   * The button default variant
   */
  @Prop() variant: DefaultVariant = 'primary';

  /**
   * Disables the button
   */
  @Prop({ reflect: true }) disabled?: boolean;

  /**
   * Visually rounds the button
   */
  @Prop() rounded = false;

  render() {
    return (
      <SdsButtonBase disabled={this.disabled} variant={this.variant} size={this.size} type={this.type} rounded={this.rounded}>
        <slot />
      </SdsButtonBase>
    );
  }
}
