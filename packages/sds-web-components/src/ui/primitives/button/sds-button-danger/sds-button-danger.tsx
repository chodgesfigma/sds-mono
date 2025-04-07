import { type ButtonType, type ButtonSize, type ButtonVariant, SdsButtonBase } from '../sds-button-base';
import { Component, Prop, h } from '@stencil/core';

export type DangerVariant = Exclude<ButtonVariant, 'primary' | 'subtle' | 'neutral'>;

@Component({
  tag: 'sds-button-danger',
  styleUrl: '../sds-button-base.scss',
  shadow: true,
})
export class SdsButtonDanger {
  /**
   * The button type
   */
  @Prop() type?: ButtonType;
  /**
   * The button size
   */
  @Prop() size?: ButtonSize;
  /**
   * The button danger variant
   */
  @Prop() variant?: DangerVariant = 'danger-primary';

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
