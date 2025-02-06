import { Component, h } from '@stencil/core';

// TODO: investigate RAC

@Component({
  tag: 'sds-label',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsLabel {
  render() {
    return (
      <div class="label" slot="label">
        <slot />
      </div>
    );
  }
}
