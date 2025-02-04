
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-zap',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconZap {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M8.66667 1.3335L2 9.3335H8L7.33333 14.6668L14 6.66683H8L8.66667 1.3335Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}