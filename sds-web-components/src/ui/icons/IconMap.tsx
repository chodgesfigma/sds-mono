import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-map',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconMap {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15855)"><path d="M5.33317 12L0.666504 14.6667V4.00004L5.33317 1.33337M5.33317 12L10.6665 14.6667M5.33317 12V1.33337M10.6665 14.6667L15.3332 12V1.33337L10.6665 4.00004M10.6665 14.6667V4.00004M10.6665 4.00004L5.33317 1.33337" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15855"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
