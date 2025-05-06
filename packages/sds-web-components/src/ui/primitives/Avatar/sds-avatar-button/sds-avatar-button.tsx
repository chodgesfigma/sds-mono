import { RenderInitialsAndImage } from '../RenderInitialsAndImage';
import { SharedAvatarProps } from '../types';
import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';
import { AnchorOrButton, AnchorOrButtonProps } from 'src/ui/utils';

@Component({
  tag: 'sds-avatar-button',
  styleUrl: 'sds-avatar-button.scss',
  shadow: true,
})
export class SdsAvatarButton {
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

  /**
   * The props of AnchorOrButton
   */
  @Prop() options?: AnchorOrButtonProps;

  render() {
    const classNames = clsx(
      'avatar',
      'avatar-button',
      `avatar-size-${this.size}`,
      `avatar-shape-${this.square ? 'square' : 'circle'}`,
      this.src ? `avatar-image` : 'avatar-initials',
    );

    return (
      <AnchorOrButton {...this.options} class={classNames}>
        <RenderInitialsAndImage src={this.src} initials={this.initials} alt={this.alt} />
      </AnchorOrButton>
    );
  }
}
