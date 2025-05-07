import { RenderInitialsAndImage } from '../RenderInitialsAndImage';
import { SharedAvatarProps } from '../types';
import { Component, Element, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-avatar',
  styleUrl: 'sds-avatar.scss',
  shadow: true,
})
export class SdsAvatar {
  @Element() el!: HTMLElement;
  /**
   * The size of the avatar
   */
  @Prop() size: SharedAvatarProps['size'] = 'medium';

  /**
   * Sets the avatar to be square, rather than round
   */
  @Prop() square: SharedAvatarProps['square'] = false;

  /**
   * URL for the avatar's image source
   */
  @Prop() src: SharedAvatarProps['src'] = '';

  /**
   * Initials that will appear behind/instead of the image
   */
  @Prop() initials: SharedAvatarProps['initials'] = '';

  /**
   * Alt text for the image
   */
  @Prop() alt: SharedAvatarProps['alt'] = '';

  render() {
    const classNames = clsx('avatar', `avatar-size-${this.size}`, `avatar-shape-${this.square ? 'square' : 'circle'}`, this.src ? `avatar-image` : 'avatar-initials');
    return (
      <span class={classNames}>
        <RenderInitialsAndImage src={this.src} initials={this.initials} alt={this.alt} />
      </span>
    );
  }
}
