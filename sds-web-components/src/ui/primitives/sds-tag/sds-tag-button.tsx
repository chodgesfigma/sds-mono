import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';
import { Scheme, Variant } from './types';

@Component({
  tag: 'sds-tag-button',
  styleUrl: 'sds-tag.scss',
  shadow: true,
})
export class SdsTagButton {
  /**
   * Color scheme for the tag
   */
  @Prop() scheme: Scheme = 'brand';

  /**
   * Sets which set of colors to use in the scheme
   */
  @Prop() variant: Variant = 'primary';

  // TODO: use `AnchorOrButton`
  render() {
    const className = clsx('tag', 'tag-button', `tag-scheme-${this.scheme}`, `tag-variant-${this.variant}`);
    return (
      <button class={className}>
        <slot />
      </button>
    );
  }
}
