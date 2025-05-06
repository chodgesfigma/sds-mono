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
        aria-label="Next page"
        class="button"
      >
        <slot>{this.label}</slot>
        <sds-icon-arrow-right />
      </sds-button>
    );
  }
}
