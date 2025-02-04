
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-navigation-2',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconNavigation2 {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M8.00004 1.33337L12.6667 14L8.00004 11.3334L3.33337 14L8.00004 1.33337Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}