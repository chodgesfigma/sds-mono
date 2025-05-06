import { type ButtonType, type ButtonSize, type ButtonVariant, SdsButtonBase } from '../sds-button-base';
import { Component, Prop, h } from '@stencil/core';

export type DangerVariant = Exclude<ButtonVariant, 'primary' | 'subtle' | 'neutral'>;

@Component({
  tag: 'sds-destructive-icon-button',
  styleUrl: '../sds-button-base.scss',
  shadow: true,
})
export class SdsDestructiveIconButton {
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
  @Prop() variant: DangerVariant = 'danger-primary';

  /**
   * Disables the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Aria Label for the button
   */
  @Prop() ariaLabel!: string;

  render() {
    return (
      <SdsButtonBase aria-label={this.ariaLabel} disabled={this.disabled} variant={this.variant} size={this.size} type={this.type} class="icon-button">
        <slot />
      </SdsButtonBase>
    );
  }
}
