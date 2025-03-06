import { TagScheme, TagVariant } from '../sds-tag/types';
import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-tag-button',
  styleUrl: 'sds-tag-button.scss',
  shadow: true,
})
export class SdsTagButton {
  /**
   * Color scheme for the tag
   */
  @Prop() scheme: TagScheme = 'brand';

  /**
   * Sets which set of colors to use in the scheme
   */
  @Prop() variant: TagVariant = 'primary';

  render() {
    const className = clsx('tag', 'tag-button', `tag-scheme-${this.scheme}`, `tag-variant-${this.variant}`);
    return (
      <button class={className}>
        <slot />
      </button>
    );
  }
}
