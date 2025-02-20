import { Component, Prop, h } from '@stencil/core';
import { clsx } from 'clsx';

@Component({
  tag: 'sds-button-group',
  styleUrl: 'sds-button-group.scss',
  shadow: true,
})
export class SdsButtonGroup {
  @Prop() align?: 'start' | 'end' | 'center' | 'justify' | 'stack' = 'start';

  render() {
    const classNames = clsx('button-group', `button-group-align-${this.align}`);

    return (
      <div class={classNames}>
        <slot />
      </div>
    );
  }
}
