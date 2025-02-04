import { Component, Prop, h } from '@stencil/core';

// Button Base props
export type ButtonType = 'submit' | 'reset' | 'button';
export type ButtonSize = 'small' | 'medium';
export type ButtonVariant = 'primary' | 'neutral' | 'subtle' | 'danger-primary' | 'danger-subtle';

@Component({
  tag: 'sds-button-base',
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
    const className = `button button-size-${this.size} button-variant-${this.variant}`;
    return (
      <button class={className} type={this.type}>
        <slot />
      </button>
    );
  }
}
