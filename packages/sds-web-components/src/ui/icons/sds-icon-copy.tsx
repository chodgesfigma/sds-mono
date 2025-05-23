import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-copy',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCopy {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15693)">
          <path
            d="M3.3335 10H2.66683C2.31321 10 1.97407 9.85956 1.72402 9.60952C1.47397 9.35947 1.3335 9.02033 1.3335 8.66671V2.66671C1.3335 2.31309 1.47397 1.97395 1.72402 1.7239C1.97407 1.47385 2.31321 1.33337 2.66683 1.33337H8.66683C9.02045 1.33337 9.35959 1.47385 9.60964 1.7239C9.85969 1.97395 10.0002 2.31309 10.0002 2.66671V3.33337M7.3335 6.00004H13.3335C14.0699 6.00004 14.6668 6.59699 14.6668 7.33337V13.3334C14.6668 14.0698 14.0699 14.6667 13.3335 14.6667H7.3335C6.59712 14.6667 6.00016 14.0698 6.00016 13.3334V7.33337C6.00016 6.59699 6.59712 6.00004 7.3335 6.00004Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15693">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
