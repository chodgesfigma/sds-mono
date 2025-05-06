import { type ButtonType, type ButtonSize, type ButtonVariant, SdsButtonBase } from '../sds-button-base';
import { Component, Prop, h } from '@stencil/core';

export type DefaultVariant = Exclude<ButtonVariant, 'danger-primary' | 'danger-subtle'>;

@Component({
  tag: 'sds-icon-button',
  styleUrl: '../sds-button-base.scss',
  shadow: true,
})
export class SdsIconButton {
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
