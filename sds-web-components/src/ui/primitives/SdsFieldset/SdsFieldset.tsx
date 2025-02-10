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

  /**
   * The id attribute of a `<form>` element you want this `<fieldset>` to be part of
   */
  @Prop() form: string = '';

  /**
   * The name associated with the group.
   */
  @Prop() name: string = '';

  render() {
    const className = clsx('fieldset', this.disabled && 'fieldset-disabled');
    return (
      <fieldset name={this.name} form={this.form} class={className} disabled={this.disabled}>
        <slot />
      </fieldset>
    );
  }
}
