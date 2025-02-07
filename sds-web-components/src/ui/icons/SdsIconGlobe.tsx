import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-globe',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconGlobe {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15799)"><path d="M14.6668 8.00001C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667M14.6668 8.00001C14.6668 4.31811 11.6821 1.33334 8.00016 1.33334M14.6668 8.00001H1.3335M8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00001M8.00016 14.6667C9.66768 12.8411 10.6153 10.472 10.6668 8.00001C10.6153 5.52803 9.66768 3.15891 8.00016 1.33334M8.00016 14.6667C6.33264 12.8411 5.38499 10.472 5.3335 8.00001C5.38499 5.52803 6.33264 3.15891 8.00016 1.33334M1.3335 8.00001C1.3335 4.31811 4.31826 1.33334 8.00016 1.33334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15799"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
