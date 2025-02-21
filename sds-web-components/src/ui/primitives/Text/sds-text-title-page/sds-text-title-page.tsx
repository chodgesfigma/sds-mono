import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-title-page',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextTitlePage {
  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'h2';

  render() {
    const classNames = `text-title-page`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
