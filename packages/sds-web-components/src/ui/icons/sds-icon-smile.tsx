import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-smile',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconSmile {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16003)">
          <path
            d="M5.33331 9.33325C5.33331 9.33325 6.33331 10.6666 7.99998 10.6666C9.66665 10.6666 10.6666 9.33325 10.6666 9.33325M5.99998 5.99992H6.00665M9.99998 5.99992H10.0066M14.6666 7.99992C14.6666 11.6818 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6818 1.33331 7.99992C1.33331 4.31802 4.31808 1.33325 7.99998 1.33325C11.6819 1.33325 14.6666 4.31802 14.6666 7.99992Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16003">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
