
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-chevrons-up',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconChevronsUp {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M11.3332 7.33333L7.99984 4L4.6665 7.33333M11.3332 12L7.99984 8.66667L4.6665 12" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}