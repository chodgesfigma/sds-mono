import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-picture',
  shadow: true,
})
export class SdsPicture {
  /**
   * Custom class for styling
   */
  @Prop() className?: string;

  render() {
    const classNames = clsx(this.className, 'picture');

    return (
      <picture class={classNames}>
        <slot />
      </picture>
    );
  }
}
