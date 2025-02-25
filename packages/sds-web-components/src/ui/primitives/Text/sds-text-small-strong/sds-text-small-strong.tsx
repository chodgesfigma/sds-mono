import { SdsTextBase, TextTag } from '../sds-text-base';
import { LineHeight } from '../sds-text/sds.text';
import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-text-small-strong',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextSmallStrong {
  /**
   * Line height of the text
   */
  @Prop() lineHeight: LineHeight = 'body';

  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'small';

  render() {
    const classNames = clsx('text-body-small-strong', `text-line-height-${this.lineHeight}`);
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
