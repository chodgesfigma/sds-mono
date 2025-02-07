import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-sun',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconSun {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16013)"><path d="M8.00008 0.666748V2.00008M8.00008 14.0001V15.3334M2.81341 2.81341L3.76008 3.76008M12.2401 12.2401L13.1867 13.1867M0.666748 8.00008H2.00008M14.0001 8.00008H15.3334M2.81341 13.1867L3.76008 12.2401M12.2401 3.76008L13.1867 2.81341M11.3334 8.00008C11.3334 9.84103 9.84103 11.3334 8.00008 11.3334C6.15913 11.3334 4.66675 9.84103 4.66675 8.00008C4.66675 6.15913 6.15913 4.66675 8.00008 4.66675C9.84103 4.66675 11.3334 6.15913 11.3334 8.00008Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16013"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
