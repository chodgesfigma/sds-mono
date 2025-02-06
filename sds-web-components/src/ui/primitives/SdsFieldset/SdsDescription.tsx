import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-description',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsDescription {
  render() {
    return (
      <div class="description">
        <slot />
      </div>
    );
  }
}
