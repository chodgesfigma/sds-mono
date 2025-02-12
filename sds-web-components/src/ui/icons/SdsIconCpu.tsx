import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-cpu',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCpu {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15711)">
          <path
            d="M5.99984 0.666687V2.66669M9.99984 0.666687V2.66669M5.99984 13.3334V15.3334M9.99984 13.3334V15.3334M13.3332 6.00002H15.3332M13.3332 9.33335H15.3332M0.666504 6.00002H2.6665M0.666504 9.33335H2.6665M3.99984 2.66669H11.9998C12.7362 2.66669 13.3332 3.26364 13.3332 4.00002V12C13.3332 12.7364 12.7362 13.3334 11.9998 13.3334H3.99984C3.26346 13.3334 2.6665 12.7364 2.6665 12V4.00002C2.6665 3.26364 3.26346 2.66669 3.99984 2.66669ZM5.99984 6.00002H9.99984V10H5.99984V6.00002Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15711">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
