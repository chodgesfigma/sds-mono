import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

/**
 * Fieldset Field
 * @return styled `div` element
 */
@Component({
  tag: 'sds-field',
  styleUrl: 'sds-field.scss',
  shadow: true,
})
export class SdsField {
  /**
   * Controls if the field is disabled or not
   */
  @Prop() disabled = false;

  render() {
    return (
      <div class={clsx('field', this.disabled && 'field--disabled')}>
        <slot />
      </div>
    );
  }
}
