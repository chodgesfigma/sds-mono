import { Component, Host, Prop, h } from '@stencil/core';
import clsx from 'clsx';

export type FlexAlignment = 'start' | 'end' | 'center' | 'stretch' | 'space-between';
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Gap = '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';
export type FlexType = 'quarter' | 'third' | 'half' | 'auto';

@Component({
  tag: 'sds-flex',
  styleUrl: 'sds-flex.scss',
  shadow: true,
})
export class SdsFlex {
  /**
   * Primary alignment
   */
  @Prop() alignPrimary: FlexAlignment = 'start';
  /**
   * Secondary alignment
   */
  @Prop() alignSecondary: FlexAlignment = 'start';
  /**
   * Container
   */
  @Prop() container: boolean = false;
  /**
   * Flex direction
   */
  @Prop() direction: Direction = 'row';
  /**
   * Gap
   */
  @Prop() gap?: Gap;
  /**
   * Type
   */
  @Prop() flexType: FlexType = 'auto';
  /**
   * Wrap
   */
  @Prop() wrap: boolean = false;

  render() {
    const classNames = clsx(
      'flex',
      this.container && 'flex-container',
      `flex-align-primary-${this.alignPrimary}`,
      `flex-align-secondary-${this.alignSecondary}`,
      `flex-direction-${this.direction}`,
      `flex-type-${this.flexType}`,
      this.gap && `flex-gap-${this.gap}`,
      this.wrap && 'flex-wrap',
    );

    return (
      <Host
        class={classNames}
        style={{
          '--flex-align-primary': this.alignPrimary,
          '--flex-align-secondary': this.alignSecondary,
          '--flex-direction': this.direction,
        }}
      >
        <slot />
      </Host>
    );
  }
}
