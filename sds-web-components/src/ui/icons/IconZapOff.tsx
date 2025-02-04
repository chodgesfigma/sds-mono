import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-zap-off',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconZapOff {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_16117)"><path d="M8.27341 4.49984L8.66675 1.33317L7.04675 3.27984M12.3801 8.6065L14.0001 6.6665H10.4401M5.33341 5.33317L2.00008 9.33317H8.00008L7.33341 14.6665L10.6667 10.6665M0.666748 0.666504L15.3334 15.3332" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16117"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
