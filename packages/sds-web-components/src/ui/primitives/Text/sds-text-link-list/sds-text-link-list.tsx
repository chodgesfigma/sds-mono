import { TextDensity } from '../types';
import { Component, Prop, h } from '@stencil/core';
import { VNode } from '@stencil/core/internal';

@Component({
  tag: 'sds-text-link-list',
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

  render() {
    const classNames = `text-link-list`;
    return (
      <sds-text-list class={classNames} density={this.density} titleElem={this.titleElem}>
        <slot />
      </sds-text-list>
    );
  }
}
