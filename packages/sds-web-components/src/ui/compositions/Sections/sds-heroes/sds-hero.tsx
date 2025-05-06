import { Component, Host, Prop, h } from '@stencil/core';
import { FlexAlignment, Direction, Gap, FlexType } from 'src/ui/layout/sds-flex/sds-flex';
import { SectionElementType, SectionPadding, SectionVariant, VerticalPadding } from 'src/ui/layout/sds-section/sds-section';

@Component({
  tag: 'sds-hero',
  styleUrl: 'sds-hero.scss',
  shadow: true,
})
export class SdsHeroes {
  // Section Props
  /**
   * Type for the main section element
   */
  @Prop() elementType: SectionElementType = 'section';

  /**
   * Padding for both top and bottom
   */
  @Prop() padding: SectionPadding = '1600';

  /**
   * Overrides padding for the top of the section
   */
  @Prop() paddingTop: VerticalPadding = null;

  /**
   * Overrides padding for the bottom of the section
   */
  @Prop() paddingBottom: VerticalPadding = null;

  /**
   * Visual variant of the section
   */
  @Prop() variant: SectionVariant = 'subtle';

  /**
   * Source string for the optional background image, variant must be set to 'image' to display
   */
  @Prop() src = '';

  // Flex Props
  /**
   * Primary alignment
   */
  @Prop() alignPrimary: FlexAlignment = 'center';

  /**
   * Secondary alignment
   */
  @Prop() alignSecondary: FlexAlignment = 'center';

  /**
   * Container
   */
  @Prop() container: boolean = true;

  /**
   * Flex direction
   */
  @Prop() direction: Direction = 'column';

  /**
   * Gap
   */
  @Prop() gap: Gap = '600';

  /**
   * Type
   */
  @Prop() flexType: FlexType = 'auto';

  /**
   * Wrap
   */
  @Prop() wrap: boolean = false;

  render() {
    return (
      <Host>
        <sds-section padding={this.padding} paddingBottom={this.paddingBottom} paddingTop={this.paddingTop} variant={this.variant} elementType={this.elementType}>
          <sds-flex container={this.container} alignPrimary={this.alignPrimary} alignSecondary={this.alignSecondary} direction={this.direction} gap={this.gap}>
            <slot />
          </sds-flex>
        </sds-section>
      </Host>
    );
  }
}
