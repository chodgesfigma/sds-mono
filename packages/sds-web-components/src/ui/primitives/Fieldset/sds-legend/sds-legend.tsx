import { Component, h } from '@stencil/core';
import clsx from 'clsx';

/**
 * Fieldset Legend
 */
@Component({
  tag: 'sds-legend',
  styleUrl: 'sds-legend.scss',
  shadow: true,
})
export class SdsLegend {
  render() {
    const className = clsx('legend');
    return (
      <legend class={className}>
        <slot />
      </legend>
    );
  }
}
