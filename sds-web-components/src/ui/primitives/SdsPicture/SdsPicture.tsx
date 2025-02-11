import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-picture',
  shadow: true,
})
export class SdsPicture {
  render() {
    return (
      <picture class="picture">
        <slot />
      </picture>
    );
  }
}
