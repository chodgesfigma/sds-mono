import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

/**
 * Fieldset
 * @return `fieldset` element
 */
@Component({
  tag: 'sds-fieldset',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsFieldset {
  /**
   * Controls if the fieldset is disabled or note
   */
  @Prop() disabled = false;

  render() {
    const className = clsx('fieldset', this.disabled && 'fieldset-disabled');
    return (
      <fieldset class={className} disabled={this.disabled}>
        <slot />
      </fieldset>
    );
  }
}
