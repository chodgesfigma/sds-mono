import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-arrow-up-right',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconArrowUpRight {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M4.66675 11.3334L11.3334 4.66675M11.3334 4.66675H4.66675M11.3334 4.66675V11.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
