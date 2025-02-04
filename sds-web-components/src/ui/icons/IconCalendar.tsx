import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-calendar',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconCalendar {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M10.6667 1.33337V4.00004M5.33333 1.33337V4.00004M2 6.66671H14M3.33333 2.66671H12.6667C13.403 2.66671 14 3.26366 14 4.00004V13.3334C14 14.0698 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0698 2 13.3334V4.00004C2 3.26366 2.59695 2.66671 3.33333 2.66671Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
