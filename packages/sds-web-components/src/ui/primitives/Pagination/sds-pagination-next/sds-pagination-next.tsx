import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sds-pagination-next',
  styleUrl: 'sds-pagination-next.scss',
  shadow: true,
})
export class SdsPaginationNext {
  /**
   * Label for the next page button, defaults to 'Next' and can be overridden via a child element
   */
  @Prop() label = 'Next';

  /**
   * Disables this nav button
   */
  @Prop() disabled = false;

  render() {
    // {...(href === null ? { disabled: true } : { href })}
    return (
      <sds-button variant="subtle" aria-label="Next page" class="button">
        <slot>{this.label}</slot>
        <sds-icon-arrow-right />
      </sds-button>
    );
  }
}
