import { Component, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-field-error',
  styleUrl: 'sds-field-error.scss',
  shadow: true,
})
export class SdsFieldError {
  render() {
    const className = clsx('error-message');
    return (
      <span class={className}>
        <slot />
      </span>
    );
  }
}
