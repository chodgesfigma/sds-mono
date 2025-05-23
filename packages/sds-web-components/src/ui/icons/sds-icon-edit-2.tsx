import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-edit-2',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconEdit2 {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15741)">
          <path
            d="M11.3333 2.00001C11.5083 1.82491 11.7162 1.68602 11.945 1.59126C12.1738 1.4965 12.419 1.44772 12.6666 1.44772C12.9142 1.44772 13.1594 1.4965 13.3882 1.59126C13.617 1.68602 13.8248 1.82491 13.9999 2.00001C14.175 2.1751 14.3139 2.38297 14.4087 2.61175C14.5034 2.84052 14.5522 3.08572 14.5522 3.33334C14.5522 3.58096 14.5034 3.82616 14.4087 4.05494C14.3139 4.28371 14.175 4.49158 13.9999 4.66667L4.99992 13.6667L1.33325 14.6667L2.33325 11L11.3333 2.00001Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15741">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
