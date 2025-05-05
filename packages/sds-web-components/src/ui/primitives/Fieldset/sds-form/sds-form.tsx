import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-form',
  styleUrl: 'sds-form.scss',
  shadow: true,
})
export class SdsForm {
  /**
   * If `true` the form will be displayed on a single line
   */
  @Prop() singleLine = false;

  render() {
    const className = clsx('form', this.singleLine && 'form-single-line');
    return (
      <form class={className}>
        <slot />
      </form>
    );
  }
}
