import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-strong',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextStrong {
  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'strong';

  render() {
    const classNames = `text-body-strong`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
