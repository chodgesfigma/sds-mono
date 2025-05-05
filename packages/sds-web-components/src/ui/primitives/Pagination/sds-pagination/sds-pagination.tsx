import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-pagination',
  styleUrl: 'sds-pagination.scss',
  shadow: true,
})
export class SdsPagination {
  /**
   * Aria label for the nav element
   */
  @Prop() ariaLabel = 'Page navigation';
  render() {
    return (
      <nav aria-label={this.ariaLabel} class="pagination">
        <slot />
      </nav>
    );
  }
}
