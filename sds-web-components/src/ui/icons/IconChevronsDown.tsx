import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-chevrons-down',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconChevronsDown {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M4.66675 8.66667L8.00008 12L11.3334 8.66667M4.66675 4L8.00008 7.33333L11.3334 4" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
