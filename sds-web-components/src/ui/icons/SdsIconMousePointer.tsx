import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-mouse-pointer',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconMousePointer {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M8.66667 8.66667L12.6667 12.6667M2 2L6.71333 13.3133L8.38667 8.38667L13.3133 6.71333L2 2Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
