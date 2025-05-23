import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-refresh-cw',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconRefreshCw {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15951)">
          <path
            d="M15.3333 2.66655V6.66655M15.3333 6.66655H11.3333M15.3333 6.66655L12.24 3.75989C11.5235 3.04303 10.637 2.51936 9.66342 2.23774C8.68979 1.95612 7.6607 1.92572 6.67215 2.14939C5.6836 2.37306 4.76783 2.84351 4.01027 3.51683C3.25271 4.19016 2.67807 5.04441 2.33996 5.99989M0.666626 13.3332V9.33322M0.666626 9.33322H4.66663M0.666626 9.33322L3.75996 12.2399C4.47646 12.9567 5.36287 13.4804 6.3365 13.762C7.31012 14.0437 8.33922 14.0741 9.32777 13.8504C10.3163 13.6267 11.2321 13.1563 11.9896 12.4829C12.7472 11.8096 13.3218 10.9554 13.66 9.99989"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15951">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
