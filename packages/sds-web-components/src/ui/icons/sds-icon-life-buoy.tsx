import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-life-buoy',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconLifeBuoy {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15833)">
          <path
            d="M3.28658 3.28665L6.11325 6.11331M9.88659 9.88665L12.7133 12.7133M12.7133 3.28665L9.88659 6.11331L12.2399 3.75998M3.28658 12.7133L6.11325 9.88665M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998ZM10.6666 7.99998C10.6666 9.47274 9.47268 10.6666 7.99992 10.6666C6.52716 10.6666 5.33325 9.47274 5.33325 7.99998C5.33325 6.52722 6.52716 5.33331 7.99992 5.33331C9.47268 5.33331 10.6666 6.52722 10.6666 7.99998Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15833">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
