
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-x-octagon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconXOctagon {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_16109)"><path d="M10 6.00016L6.00001 10.0002M6.00001 6.00016L10 10.0002M5.24001 1.3335H10.76L14.6667 5.24016V10.7602L10.76 14.6668H5.24001L1.33334 10.7602V5.24016L5.24001 1.3335Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16109"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}