import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-bluetooth',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconBluetooth {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15615)"><path d="M4.33325 4.33341L11.6666 11.6667L7.99992 15.3334V0.666748L11.6666 4.33341L4.33325 11.6667" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15615"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
