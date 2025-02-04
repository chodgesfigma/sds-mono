import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-align-left',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconAlignLeft {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M11.3333 6.66667H2M14 4H2M14 9.33333H2M11.3333 12H2" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}
