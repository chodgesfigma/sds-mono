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
  @Prop() class?: string;

  render() {
    const classNames = clsx(this.class, 'picture');

    return (
      <picture class={classNames}>
        <slot />
      </picture>
    );
  }
}
