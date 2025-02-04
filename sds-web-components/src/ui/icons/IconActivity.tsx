import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-activity',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconActivity {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M14.6666 8H12L9.99998 14L5.99998 2L3.99998 8H1.33331" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
