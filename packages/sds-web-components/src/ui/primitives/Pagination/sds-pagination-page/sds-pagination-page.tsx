import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-pagination-page',
  styleUrl: 'sds-pagination-page.scss',
  shadow: true,
})
export class SdsPaginationPage {
  /**
   * Visually and via `aria-current` marks this page as the current one
   */
  @Prop() current = false;

  /**
   * Link for the button
   */
  @Prop() href = '';

  /**
   * The page number this links to
   */
  @Prop() pageNumber!: number;

  render() {
    return (
      // href={this.href}
      <sds-button aria-label={`Page ${this.pageNumber}`} aria-current={this.current ? 'page' : undefined} variant={this.current ? 'primary' : 'subtle'}>
        <slot>{this.pageNumber}</slot>
      </sds-button>
    );
  }
}
