import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-crosshair',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCrosshair {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15717)">
          <path
            d="M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666M14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331M14.6667 7.99998H12M8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998M8.00004 14.6666V12M1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331M1.33337 7.99998H4.00004M8.00004 1.33331V3.99998"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15717">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
