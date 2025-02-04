import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-sliders',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconSliders {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15999)"><path d="M2.6665 14V9.33333M2.6665 6.66667V2M7.99984 14V8M7.99984 5.33333V2M13.3332 14V10.6667M13.3332 8V2M0.666504 9.33333H4.6665M5.99984 5.33333H9.99984M11.3332 10.6667H15.3332" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15999"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
