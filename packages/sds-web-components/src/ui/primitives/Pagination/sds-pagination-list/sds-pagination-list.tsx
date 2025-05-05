import { Component, State, h } from '@stencil/core';
import { useMediaQuery } from 'src/ui/hooks/useMediaQuery';

@Component({
  tag: 'sds-pagination-list',
  styleUrl: 'sds-pagination-list.scss',
  shadow: true,
})
export class SdsPaginationList {
  @State() isTablet = false;

  private mediaQueryList: MediaQueryList = useMediaQuery('tablet');

  componentWillLoad() {
    this.updateMatches(this.mediaQueryList); // Initial check for media query
    this.mediaQueryList.addEventListener('change', this.updateMatches);
  }

  disconnectedCallback() {
    this.mediaQueryList.removeEventListener('change', this.updateMatches);
  }

  private updateMatches = (event: MediaQueryListEvent | MediaQueryList) => {
    this.isTablet = event.matches;
  };

  render() {
    return (
      this.isTablet && (
        <span class="pagination-list">
          <slot />
        </span>
      )
    );
  }
}
