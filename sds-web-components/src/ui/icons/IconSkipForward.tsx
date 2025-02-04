
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-skip-forward',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconSkipForward {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <path d="M12.6666 3.33341V12.6667M3.33325 2.66675L9.99992 8.00008L3.33325 13.3334V2.66675Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </Icon>
    );
  }
}