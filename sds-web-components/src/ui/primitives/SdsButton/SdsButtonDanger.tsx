import { Component, Prop, h } from '@stencil/core';
import { Type, Size, Variant, SdsButtonBase } from './SdsButtonBase';

export type DangerVariant = Exclude<Variant, 'primary' | 'subtle' | 'neutral'>;

@Component({
  tag: 'sds-button-danger',
  styleUrl: 'SdsButton.scss',
  shadow: true,
})
export class SdsButtonDanger {
  /**
   * The button type
   */
  @Prop() type?: Type;
  /**
   * The button size
   */
  @Prop() size?: Size;
  /**
   * The button danger variant
   */
  @Prop() variant?: DangerVariant;

  render() {
    return (
      <SdsButtonBase variant={this.variant} size={this.size} type={this.type}>
        <slot />
      </SdsButtonBase>
    );
  }
}
