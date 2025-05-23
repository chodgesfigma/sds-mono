import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-thumbs-up',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconThumbsUp {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16033)">
          <path
            d="M4.66683 7.33325L7.3335 1.33325C7.86393 1.33325 8.37264 1.54397 8.74771 1.91904C9.12278 2.29411 9.3335 2.80282 9.3335 3.33325V5.99992H13.1068C13.3001 5.99773 13.4915 6.03759 13.6679 6.11673C13.8442 6.19587 14.0012 6.31241 14.1281 6.45826C14.2549 6.60411 14.3485 6.7758 14.4024 6.96142C14.4563 7.14704 14.4692 7.34216 14.4402 7.53325L13.5202 13.5333C13.4719 13.8512 13.3105 14.141 13.0654 14.3493C12.8204 14.5575 12.5084 14.6702 12.1868 14.6666H4.66683M4.66683 7.33325V14.6666M4.66683 7.33325H2.66683C2.31321 7.33325 1.97407 7.47373 1.72402 7.72378C1.47397 7.97382 1.3335 8.31296 1.3335 8.66658V13.3333C1.3335 13.6869 1.47397 14.026 1.72402 14.2761C1.97407 14.5261 2.31321 14.6666 2.66683 14.6666H4.66683"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16033">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
