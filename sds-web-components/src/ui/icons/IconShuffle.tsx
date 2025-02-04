import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-shuffle',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconShuffle {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M10.6666 2H14M14 2V5.33333M14 2L2.66663 13.3333M14 10.6667V14M14 14H10.6666M14 14L9.99996 10M2.66663 2.66667L5.99996 6" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
