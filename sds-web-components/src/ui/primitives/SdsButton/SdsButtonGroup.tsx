import { Component, Prop, h } from '@stencil/core';
import { clsx } from 'clsx';

@Component({
  tag: 'sds-button-group',
  styleUrl: 'SdsButton.scss',
  shadow: true,
})
export class SdsButtonGroup {
  @Prop() align?: 'start' | 'end' | 'center' | 'justify' | 'stack';

  render() {
    const classNames = clsx(
      // className,
      'button-group',
      `button-group-align-${this.align}`,
    );

    return <div class={classNames} />;
  }
}
