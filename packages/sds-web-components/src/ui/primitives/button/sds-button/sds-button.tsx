import { Size, Type, Variant, SdsButtonBase } from '../sds-button-base';
import { Component, Prop, h } from '@stencil/core';

export type DefaultVariant = Exclude<Variant, 'danger-primary' | 'danger-subtle'>;

@Component({
  tag: 'sds-button',
  styleUrl: '../sds-button-base.scss',
  shadow: true,
})
export class SdsButton {
  /**
   * The button type
   */
  @Prop() type: Type = 'button';
  /**
   * The button size
   */
  @Prop() size: Size = 'medium';
  /**
   * The button default variant
   */
  @Prop() variant: DefaultVariant = 'primary';

  render() {
    return (
      <SdsButtonBase variant={this.variant} size={this.size} type={this.type}>
        <slot />
      </SdsButtonBase>
    );
  }
}
