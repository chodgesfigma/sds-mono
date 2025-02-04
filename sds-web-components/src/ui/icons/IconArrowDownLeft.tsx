import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-arrow-down-left',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconArrowDownLeft {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M11.3334 4.66675L4.66675 11.3334M4.66675 11.3334H11.3334M4.66675 11.3334V4.66675" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
