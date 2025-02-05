import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-underline',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconUnderline {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M4.00008 2V6.66667C4.00008 7.72753 4.42151 8.74495 5.17165 9.49509C5.9218 10.2452 6.93922 10.6667 8.00008 10.6667C9.06095 10.6667 10.0784 10.2452 10.8285 9.49509C11.5787 8.74495 12.0001 7.72753 12.0001 6.66667V2M2.66675 14H13.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
