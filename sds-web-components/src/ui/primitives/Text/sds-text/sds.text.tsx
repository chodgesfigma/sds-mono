import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

export type LineHeight = 'body' | 'single';

@Component({
  tag: 'sds-text',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsText {
  /**
   * Line height of the text
   */
  @Prop() lineHeight: LineHeight = 'body';

  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'p';

  render() {
    const classNames = `text-body-base text-line-height-${this.lineHeight}`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
