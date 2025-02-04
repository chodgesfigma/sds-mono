import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-tablet',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconTablet {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M8.00002 11.9999H8.00669M4.00002 1.33325H12C12.7364 1.33325 13.3334 1.93021 13.3334 2.66659V13.3333C13.3334 14.0696 12.7364 14.6666 12 14.6666H4.00002C3.26364 14.6666 2.66669 14.0696 2.66669 13.3333V2.66659C2.66669 1.93021 3.26364 1.33325 4.00002 1.33325Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
