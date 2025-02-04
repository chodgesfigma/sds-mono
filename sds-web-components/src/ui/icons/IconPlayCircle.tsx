import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-play-circle',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconPlayCircle {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15931)"><path d="M7.99998 14.6666C11.6819 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6819 1.33325 7.99998 1.33325C4.31808 1.33325 1.33331 4.31802 1.33331 7.99992C1.33331 11.6818 4.31808 14.6666 7.99998 14.6666Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66665 5.33325L10.6666 7.99992L6.66665 10.6666V5.33325Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15931"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
