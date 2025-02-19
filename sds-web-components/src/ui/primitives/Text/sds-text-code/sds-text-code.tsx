import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-code',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextCode {
  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'p';

  render() {
    const classNames = `text-body-code`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
