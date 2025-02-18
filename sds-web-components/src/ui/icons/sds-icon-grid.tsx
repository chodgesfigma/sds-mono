import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-grid',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconGrid {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M6.66667 2H2V6.66667H6.66667V2Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 2H9.33333V6.66667H14V2Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 9.33333H9.33333V14H14V9.33333Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.66667 9.33333H2V14H6.66667V9.33333Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </SdsIcon>
    );
  }
}
