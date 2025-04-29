import { Component, Prop, State, h } from '@stencil/core';
import clsx from 'clsx';
import { getSlotComponents } from 'src/utils/slot-helpers';

export type AvatarGroupSpacing = '100' | '200' | '300' | 'negative-100' | 'negative-200' | 'negative-300';

@Component({
  tag: 'sds-avatar-group',
  styleUrl: 'sds-avatar-group.scss',
  shadow: true,
})
export class SdsAvatarGroup {
  avatarSlotRef!: HTMLSlotElement;

  /**
   * How many avatars are over the max number
   */
  @State() overflowCount = 0;

  /**
   * The max number of avatars to show, the rest will be hidden
   */
  @Prop() max: number = 3;

  /**
   * The spacing between avatars
   */
  @Prop() spacing: AvatarGroupSpacing = '200';

  limitAvatars = () => {
    const childArray = getSlotComponents<HTMLElement>({ slot: this.avatarSlotRef, tagName: 'sds-avatar' });
    const childCount = childArray.length;
    const overflow = Math.max(0, childCount - this.max);

    // apply a class to overflow avatars that will hide them
    const filteredChildren = childArray.splice(childCount - overflow);
    filteredChildren.forEach(avatar => {
      avatar.classList.add('avatar-overflow');
    });
    this.overflowCount = overflow;
  };

  render() {
    const classNames = clsx('avatar-group', `avatar-group-spacing-${this.spacing}`);
    return (
      <div class={classNames}>
        <slot onSlotchange={this.limitAvatars} ref={el => (this.avatarSlotRef = el as HTMLSlotElement)}></slot>
        {this.overflowCount > 0 && <span class="avatar-group-overflow">+{this.overflowCount}</span>}
      </div>
    );
  }
}
