import { SdsTextBase, TextTag } from '../sds-text-base';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-title-hero',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextTitleHero {
  /**
   * Element type
   */
  @Prop() elementType: TextTag = 'h1';

  render() {
    const classNames = `text-title-hero`;
    return (
      <SdsTextBase elementType={this.elementType} class={classNames}>
        <slot />
      </SdsTextBase>
    );
  }
}
