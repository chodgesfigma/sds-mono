
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-corner-up-left',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconCornerUpLeft {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M6.00008 9.33335L2.66675 6.00002M2.66675 6.00002L6.00008 2.66669M2.66675 6.00002H10.6667C11.374 6.00002 12.0523 6.28097 12.5524 6.78107C13.0525 7.28117 13.3334 7.95944 13.3334 8.66669V13.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}