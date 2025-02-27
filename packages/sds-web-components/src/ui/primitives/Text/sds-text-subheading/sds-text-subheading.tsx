import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-subheading',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextSubheading {
  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'p';

  render() {
    const classNames = `text-subheading`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
