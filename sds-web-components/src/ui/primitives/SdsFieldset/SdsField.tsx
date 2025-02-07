import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-field',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsField {
  @Prop() disabled = false;

  render() {
    return (
      <div class={clsx('field', this.disabled && 'field--disabled')}>
        <slot />
      </div>
    );
  }
}
