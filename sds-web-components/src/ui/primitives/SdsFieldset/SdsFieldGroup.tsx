import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-field-group',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsFieldGroup {
  render() {
    return (
      <div class="field-group">
        <slot />
      </div>
    );
  }
}
