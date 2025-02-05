import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-toggle-right',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconToggleRight {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16037)"><path d="M10.6667 3.33325H5.33332C2.75599 3.33325 0.666656 5.42259 0.666656 7.99992C0.666656 10.5772 2.75599 12.6666 5.33332 12.6666H10.6667C13.244 12.6666 15.3333 10.5772 15.3333 7.99992C15.3333 5.42259 13.244 3.33325 10.6667 3.33325Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.6667 9.99992C11.7712 9.99992 12.6667 9.10449 12.6667 7.99992C12.6667 6.89535 11.7712 5.99992 10.6667 5.99992C9.56209 5.99992 8.66666 6.89535 8.66666 7.99992C8.66666 9.10449 9.56209 9.99992 10.6667 9.99992Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16037"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
