
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-arrow-down',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconArrowDown {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M7.99992 3.33325V12.6666M7.99992 12.6666L12.6666 7.99992M7.99992 12.6666L3.33325 7.99992" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}