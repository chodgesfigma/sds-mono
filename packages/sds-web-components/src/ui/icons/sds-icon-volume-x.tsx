import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-volume-x',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconVolumeX {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16095)">
          <path
            d="M15.3334 6.00016L11.3334 10.0002M11.3334 6.00016L15.3334 10.0002M7.33337 3.3335L4.00004 6.00016H1.33337V10.0002H4.00004L7.33337 12.6668V3.3335Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16095">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
