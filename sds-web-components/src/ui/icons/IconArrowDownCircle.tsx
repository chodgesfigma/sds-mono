import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-arrow-down-circle',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconArrowDownCircle {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15575)"><path d="M5.33337 7.99992L8.00004 10.6666M8.00004 10.6666L10.6667 7.99992M8.00004 10.6666V5.33325M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15575"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
