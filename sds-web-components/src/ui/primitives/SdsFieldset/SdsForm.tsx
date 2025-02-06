import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-form',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsForm {
  /**
   * Display the form items on a single line
   */
  @Prop() singleLine: boolean = false;

  render() {
    const classNames = clsx('form', this.singleLine && 'form-single-line');
    return (
      <div class={classNames}>
        <slot />
      </div>
    );
  }
}
