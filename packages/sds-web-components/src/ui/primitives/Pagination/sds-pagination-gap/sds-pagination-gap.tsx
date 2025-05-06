import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-pagination-gap',
  styleUrl: 'sds-pagination-gap.scss',
  shadow: true,
})
export class SdsPaginationGap {
  render() {
    return (
      <div aria-hidden="true" class="">
        &hellip;
      </div>
    );
  }
}
