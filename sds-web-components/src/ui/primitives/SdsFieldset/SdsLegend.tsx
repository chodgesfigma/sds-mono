import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-legend',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsLegend {
  render() {
    return (
      <legend class="legend">
        <slot />
      </legend>
    );
  }
}
