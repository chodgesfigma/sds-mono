import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-field-error',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsFieldError {
  render() {
    return (
      <div class="error-message">
        <slot />
      </div>
    );
  }
}
