import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-skip-back',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconSkipBack {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M3.33325 12.6667V3.33341M12.6666 13.3334L5.99992 8.00008L12.6666 2.66675V13.3334Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
