import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-corner-left-down',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconCornerLeftDown {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M9.33329 10L5.99996 13.3334M5.99996 13.3334L2.66663 10M5.99996 13.3334V5.33335C5.99996 4.62611 6.28091 3.94783 6.78101 3.44774C7.2811 2.94764 7.95938 2.66669 8.66663 2.66669H13.3333" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
