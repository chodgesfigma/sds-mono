import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-credit-card',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCreditCard {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15713)"><path d="M0.666656 6.66669H15.3333M1.99999 2.66669H14C14.7364 2.66669 15.3333 3.26364 15.3333 4.00002V12C15.3333 12.7364 14.7364 13.3334 14 13.3334H1.99999C1.26361 13.3334 0.666656 12.7364 0.666656 12V4.00002C0.666656 3.26364 1.26361 2.66669 1.99999 2.66669Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15713"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
