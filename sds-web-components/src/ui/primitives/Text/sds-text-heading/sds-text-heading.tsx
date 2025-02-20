import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-heading',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextHeading {
  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'h3';

  render() {
    const classNames = `text-heading`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
