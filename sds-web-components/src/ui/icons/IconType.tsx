import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-type',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconType {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M2.66663 4.66675V2.66675H13.3333V4.66675M5.99996 13.3334H9.99996M7.99996 2.66675V13.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
