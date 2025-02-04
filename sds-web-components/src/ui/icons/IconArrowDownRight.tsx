
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-arrow-down-right',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconArrowDownRight {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M4.66675 4.66675L11.3334 11.3334M11.3334 11.3334V4.66675M11.3334 11.3334H4.66675" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}