
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-trending-up',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconTrendingUp {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_16049)"><path d="M15.3334 4L9.00008 10.3333L5.66675 7L0.666748 12M15.3334 4H11.3334M15.3334 4L15.3334 8" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16049"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}