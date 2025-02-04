import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-send',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconSend {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15969)"><path d="M14.6667 1.33325L7.33337 8.66658M14.6667 1.33325L10 14.6666L7.33337 8.66658M14.6667 1.33325L1.33337 5.99992L7.33337 8.66658" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15969"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
