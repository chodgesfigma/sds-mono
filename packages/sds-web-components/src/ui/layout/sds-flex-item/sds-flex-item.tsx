import { Component, Host, Prop, h } from '@stencil/core';
import clsx from 'clsx';

export type FlexItemSize = 'full' | 'major' | 'minor' | 'half' | 'fill';

@Component({
  tag: 'sds-flex-item',
  shadow: true,
})
export class SdsFlexItem {
  @Prop() size?: FlexItemSize;

  render() {
    const classNames = clsx('flex-item', this.size && `flex-item-size-${this.size}`);

    return (
      <Host class={classNames}>
        <slot />
      </Host>
    );
  }
}
