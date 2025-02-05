import { Component, Prop, h } from '@stencil/core';
import { clsx } from 'clsx';

// Button Base props
export type Type = 'submit' | 'reset' | 'button';
export type Size = 'small' | 'medium';
export type Variant = 'primary' | 'neutral' | 'subtle' | 'danger-primary' | 'danger-subtle';

@Component({
  tag: 'sds-button-base',
  styleUrl: 'SdsButton.scss',
  shadow: true,
})
export class SdsButtonBase {
  /**
   * The button type
   */
  @Prop() type?: Type;
  /**
   * The button size
   */
  @Prop() size?: Size = 'medium';
  /**
   * The button variant
   */
  @Prop() variant?: Variant;

  render() {
    const classNames = clsx('button', `button-size-${this.size}`, `button-variant-${this.variant}`);
    return (
      <button class={classNames} type={this.type}>
        <slot />
      </button>
    );
  }
}
