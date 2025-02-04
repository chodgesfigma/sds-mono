
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-tv',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconTv {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_16055)"><path d="M11.3333 1.33325L8.00001 4.66659L4.66668 1.33325M2.66668 4.66659H13.3333C14.0697 4.66659 14.6667 5.26354 14.6667 5.99992V13.3333C14.6667 14.0696 14.0697 14.6666 13.3333 14.6666H2.66668C1.9303 14.6666 1.33334 14.0696 1.33334 13.3333V5.99992C1.33334 5.26354 1.9303 4.66659 2.66668 4.66659Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16055"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}