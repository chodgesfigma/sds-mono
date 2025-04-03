import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-avatar-block',
  styleUrl: 'sds-avatar-block.scss',
  shadow: true,
})
export class SdsAvatarBlock {
  /**
   * The main text to the right of the avatar
   */
  @Prop() avatarTitle!: string;
  /**
   * A small blurb that appears below the title
   */
  @Prop() description = '';
  render() {
    return (
      <div class="avatar-block">
        <slot></slot>
        <sds-text-strong>{this.avatarTitle}</sds-text-strong>
        {this.description && <sds-text>{this.description}</sds-text>}
      </div>
    );
  }
}
