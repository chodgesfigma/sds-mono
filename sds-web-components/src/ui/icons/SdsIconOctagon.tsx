import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-octagon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconOctagon {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15901)">
          <path
            d="M5.23992 1.33337H10.7599L14.6666 5.24004V10.76L10.7599 14.6667H5.23992L1.33325 10.76V5.24004L5.23992 1.33337Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15901">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
