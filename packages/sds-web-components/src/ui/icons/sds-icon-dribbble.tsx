import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-dribbble',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconDribbble {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15737)">
          <path
            d="M5.70671 1.83334C8.62004 5.85334 9.72004 8.11334 11.06 13.6467M12.7534 3.39334C10.2734 6.29334 6.79337 7.16668 1.50004 7.29334M14.5 8.56001C12.1667 7.94001 10.08 8.01334 8.54004 8.56001C6.82004 9.17334 5.20004 10.4667 3.58004 12.7733M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00001C1.33337 4.31811 4.31814 1.33334 8.00004 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15737">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
