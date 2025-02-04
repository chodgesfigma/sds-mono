import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-alert-octagon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconAlertOctagon {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15557)"><path d="M8.00004 5.33325V7.99992M8.00004 10.6666H8.00671M5.24004 1.33325H10.76L14.6667 5.23992V10.7599L10.76 14.6666H5.24004L1.33337 10.7599V5.23992L5.24004 1.33325Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15557"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
