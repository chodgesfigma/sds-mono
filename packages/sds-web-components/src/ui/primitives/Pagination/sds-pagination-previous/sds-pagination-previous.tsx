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
   * Link for the next page (currently WIP), disables the button if null
   */
  @Prop() href: string | null = null;

  render() {
    return (
      <sds-button
        {...(this.href === null
          ? { disabled: true }
          : {
              /* TODO: resolve href */
            })}
        variant="subtle"
        aria-label="Previous page"
      >
        <sds-icon-arrow-left />
        <slot>{this.label}</slot>
      </sds-button>
    );
  }
}
