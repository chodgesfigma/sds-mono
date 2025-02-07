import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-navigation-2',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconNavigation2 {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M8.00004 1.33337L12.6667 14L8.00004 11.3334L3.33337 14L8.00004 1.33337Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
