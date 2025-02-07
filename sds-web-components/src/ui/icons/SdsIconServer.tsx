import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-server',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconServer {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15971)"><path d="M4.00004 3.99992H4.00671M4.00004 11.9999H4.00671M2.66671 1.33325H13.3334C14.0698 1.33325 14.6667 1.93021 14.6667 2.66659V5.33325C14.6667 6.06963 14.0698 6.66659 13.3334 6.66659H2.66671C1.93033 6.66659 1.33337 6.06963 1.33337 5.33325V2.66659C1.33337 1.93021 1.93033 1.33325 2.66671 1.33325ZM2.66671 9.33325H13.3334C14.0698 9.33325 14.6667 9.93021 14.6667 10.6666V13.3333C14.6667 14.0696 14.0698 14.6666 13.3334 14.6666H2.66671C1.93033 14.6666 1.33337 14.0696 1.33337 13.3333V10.6666C1.33337 9.93021 1.93033 9.33325 2.66671 9.33325Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15971"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
