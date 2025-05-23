import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-shopping-cart',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconShoppingCart {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15985)">
          <path
            d="M0.666687 0.666748H3.33335L5.12002 9.59342C5.18098 9.90035 5.34796 10.1761 5.59172 10.3723C5.83548 10.5685 6.14049 10.6727 6.45335 10.6667H12.9334C13.2462 10.6727 13.5512 10.5685 13.795 10.3723C14.0387 10.1761 14.2057 9.90035 14.2667 9.59342L15.3334 4.00008H4.00002M6.66669 14.0001C6.66669 14.3683 6.36821 14.6667 6.00002 14.6667C5.63183 14.6667 5.33335 14.3683 5.33335 14.0001C5.33335 13.6319 5.63183 13.3334 6.00002 13.3334C6.36821 13.3334 6.66669 13.6319 6.66669 14.0001ZM14 14.0001C14 14.3683 13.7015 14.6667 13.3334 14.6667C12.9652 14.6667 12.6667 14.3683 12.6667 14.0001C12.6667 13.6319 12.9652 13.3334 13.3334 13.3334C13.7015 13.3334 14 13.6319 14 14.0001Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15985">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
