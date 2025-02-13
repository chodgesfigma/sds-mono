import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-battery',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconBattery {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15609)">
          <path
            d="M15.3333 8.66667V7.33333M1.99996 4H11.3333C12.0697 4 12.6666 4.59695 12.6666 5.33333V10.6667C12.6666 11.403 12.0697 12 11.3333 12H1.99996C1.26358 12 0.666626 11.403 0.666626 10.6667V5.33333C0.666626 4.59695 1.26358 4 1.99996 4Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15609">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
