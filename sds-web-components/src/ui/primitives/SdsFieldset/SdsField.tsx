import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-field',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsField {
  render() {
    return (
      <div class="field">
        <slot />
      </div>
    );
  }
}
