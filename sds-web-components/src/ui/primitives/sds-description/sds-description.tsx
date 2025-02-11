import { Component, h } from '@stencil/core';
import clsx from 'clsx';

/**
 * Fieldset Description
 */
@Component({
  tag: 'sds-description',
  styleUrl: 'sds-description.scss',
  shadow: true,
})
export class SdsDescription {
  render() {
    const className = clsx('description');
    return (
      <span class={className}>
        <slot />
      </span>
    );
  }
}
