import { TextDensity } from '../types';
import { Component, Prop, h } from '@stencil/core';
import { VNode } from '@stencil/core/internal';
import clsx from 'clsx';

@Component({
  tag: 'sds-text-list',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextList {
  /**
   * Density
   */
  @Prop() density: TextDensity = 'default';

  /**
   * title
   */
  @Prop() titleElem?: VNode;

  /**
   * title
   */
  @Prop() class?: string;

  render() {
    const classNames = clsx('text-list', `text-list-density-${this.density}`, this.class);
    return (
      <ul class={classNames}>
        {this.titleElem && <li class="text-list-title">{this.titleElem}</li>}
        <slot />
      </ul>
    );
  }
}
