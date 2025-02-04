
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-chrome',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconChrome {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15659)"><path d="M8.00001 5.33337C6.52725 5.33337 5.33334 6.52728 5.33334 8.00004C5.33334 9.4728 6.52725 10.6667 8.00001 10.6667C9.47277 10.6667 10.6667 9.4728 10.6667 8.00004C10.6667 6.52728 9.47277 5.33337 8.00001 5.33337ZM8.00001 5.33337H14.1133M2.63334 4.04004L5.69334 9.33337M7.25334 14.6267L10.3067 9.33337M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00004C1.33334 4.31814 4.31811 1.33337 8.00001 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15659"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}