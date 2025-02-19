import { Component, Host, Prop, h } from '@stencil/core';
import clsx from 'clsx';

type Size = 'full' | 'major' | 'minor' | 'half' | 'fill';

@Component({
  tag: 'sds-flex-item',
  styleUrl: 'sds-flex-item.scss',
  shadow: true,
})
export class SdsFlexItem {
  @Prop() size?: Size;

  render() {
    const classNames = clsx('flex-item', this.size && `flex-item-size-${this.size}`);

    return (
      <Host class={classNames}>
        <slot />
      </Host>
    );
  }
}
