import { type Type, type Size, type Variant, SdsButtonBase } from '../sds-button-base';
import { Component, Prop, h } from '@stencil/core';

export type DangerVariant = Exclude<Variant, 'primary' | 'subtle' | 'neutral'>;

@Component({
  tag: 'sds-button-danger',
  styleUrl: '../sds-button-base.scss',
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
  @Prop() variant?: DangerVariant = 'danger-primary';

  /**
   * Disables the button
   */
  @Prop({ reflect: true }) disabled?: boolean;

  render() {
    return (
      <SdsButtonBase disabled={this.disabled} variant={this.variant} size={this.size} type={this.type}>
        <slot />
      </SdsButtonBase>
    );
  }
}
