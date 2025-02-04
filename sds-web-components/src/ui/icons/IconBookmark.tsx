
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-bookmark',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconBookmark {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M12.6667 14L8.00001 10.6667L3.33334 14V3.33333C3.33334 2.97971 3.47382 2.64057 3.72387 2.39052C3.97392 2.14048 4.31305 2 4.66668 2H11.3333C11.687 2 12.0261 2.14048 12.2762 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}