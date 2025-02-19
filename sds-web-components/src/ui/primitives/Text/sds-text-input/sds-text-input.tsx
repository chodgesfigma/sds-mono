import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-input',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextInput {
  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'p';

  render() {
    const classNames = `text-input`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
