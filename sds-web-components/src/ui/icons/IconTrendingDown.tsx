
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-trending-down',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconTrendingDown {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_16047)"><path d="M15.3334 12L9.00008 5.66667L5.66675 9L0.666748 4M15.3334 12H11.3334M15.3334 12L15.3334 8" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16047"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}