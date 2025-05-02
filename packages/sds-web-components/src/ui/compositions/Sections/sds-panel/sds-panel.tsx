import { Component, Host, Prop, h } from '@stencil/core';
import { FlexAlignment, Direction, Gap, FlexType } from 'src/ui/layout/sds-flex/sds-flex';

@Component({
  tag: 'sds-panel',
  styleUrl: 'sds-panel.scss',
  shadow: true,
})
export class SdsPanels {
  /**
   * Primary alignment
   */
  @Prop() alignPrimary: FlexAlignment = 'start';

  /**
   * Secondary alignment
   */
  @Prop() alignSecondary: FlexAlignment = 'start';

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

  render() {
    return (
      <Host>
        <sds-flex container wrap alignPrimary={this.alignPrimary} alignSecondary={this.alignSecondary} direction={this.direction} gap={this.gap} flexType={this.flexType}>
          <slot />
        </sds-flex>
      </Host>
    );
  }
}
