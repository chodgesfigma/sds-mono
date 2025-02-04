
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-italic',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconItalic {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M12.6667 2.66669H6.66671M9.33337 13.3334H3.33337M10 2.66669L6.00004 13.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}