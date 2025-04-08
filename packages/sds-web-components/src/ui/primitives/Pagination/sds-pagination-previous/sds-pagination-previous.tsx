import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sds-pagination-previous',
  styleUrl: 'sds-pagination-previous.scss',
  shadow: true,
})
export class SdsPaginationPrevious {
  /**
   * Label for the next page button, defaults to 'Previous' and can be overridden via a child element
   */
  @Prop() label = 'Previous';

  /**
   * Disables this nav button
   */
  @Prop() disabled = false;

  render() {
    // {...(href === null ? { disabled: true } : { href })}
    return (
      <sds-button variant="subtle" aria-label="Previous page">
        <sds-icon-arrow-left />
        <slot>{this.label}</slot>
      </sds-button>
    );
  }
}
