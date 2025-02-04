import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-archive',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconArchive {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15573)"><path d="M14 5.33333V14H1.99996V5.33333M6.66663 8H9.33329M0.666626 2H15.3333V5.33333H0.666626V2Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15573"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
