import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

export type SectionPadding = '600' | '800' | '1200' | '1600' | '4000';
export type VerticalPadding = SectionPadding | null;

@Component({
  tag: 'sds-section',
  styleUrl: 'sds-section.scss',
  shadow: true,
})
export class SdsSection {
  /**
   * Type for the main section element
   */
  @Prop() elementType: 'section' | 'header' | 'footer' = 'section';

  /**
   * Padding for both top and bottom
   */
  @Prop() padding: SectionPadding = '600';

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
  @Prop() variant: 'brand' | 'neutral' | 'stroke' | 'subtle' | 'image' = 'subtle';

  /**
   * Source string for the optional background image, variant must be set to 'image' to display
   */
  @Prop() src = '';

  render() {
    const Image = this.variant === 'image' ? <sds-image alt="Background image" role="presentation" src={this.src} size="fill" aspectRatio="fill" class="section-image" /> : null;

    const classNames = clsx(
      'section',
      `section-variant-${this.variant}`,
      `section-padding-top-${this.paddingTop || this.padding}`,
      `section-padding-bottom-${this.paddingBottom || this.padding}`,
    );

    switch (this.elementType) {
      case 'section':
        return (
          <section class={classNames}>
            {Image}
            <slot />
          </section>
        );
      case 'header':
        return (
          <header class={classNames}>
            {Image} <slot />
          </header>
        );
      case 'footer':
        return (
          <footer class={classNames}>
            {Image} <slot />
          </footer>
        );
    }
  }
}
