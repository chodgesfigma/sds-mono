import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-minimize-2',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconMinimize2 {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M2.66667 9.33333H6.66667M6.66667 9.33333V13.3333M6.66667 9.33333L2 14M13.3333 6.66667H9.33333M9.33333 6.66667V2.66667M9.33333 6.66667L14 2" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
