import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-emphasis',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextEmphasis {
  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'p';

  render() {
    const classNames = `text-body-emphasis`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
