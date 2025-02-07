import { Component, h } from '@stencil/core';

/**
 * Fieldset FieldGroup
 * @return styled `div` element
 */
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
