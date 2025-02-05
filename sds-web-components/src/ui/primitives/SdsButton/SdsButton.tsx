import { Component, Prop, h } from '@stencil/core';
import { Size, Type, Variant } from './SdsButtonBase';

export type DefaultVariant = Exclude<Variant, 'danger-primary' | 'danger-subtle'>;

@Component({
  tag: 'sds-button',
  styleUrl: 'SdsButton.scss',
  shadow: true,
})
export class SdsButton {
  /**
   * The button type
   */
  @Prop() type?: Type;
  /**
   * The button size
   */
  @Prop() size?: Size;
  /**
   * The button default variant
   */
  @Prop() variant?: DefaultVariant = 'primary';

  render() {
    return (
      <sds-button-base variant={this.variant} size={this.size} type={this.type}>
        <slot />
      </sds-button-base>
    );
  }
}
