import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-divide-circle',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconDivideCircle {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15725)">
          <path
            d="M5.33325 7.99998H10.6666M8.66659 10.6666C8.66659 11.0348 8.36811 11.3333 7.99992 11.3333C7.63173 11.3333 7.33325 11.0348 7.33325 10.6666C7.33325 10.2985 7.63173 9.99998 7.99992 9.99998C8.36811 9.99998 8.66659 10.2985 8.66659 10.6666ZM8.66659 5.33331C8.66659 5.7015 8.36811 5.99998 7.99992 5.99998C7.63173 5.99998 7.33325 5.7015 7.33325 5.33331C7.33325 4.96512 7.63173 4.66665 7.99992 4.66665C8.36811 4.66665 8.66659 4.96512 8.66659 5.33331ZM14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15725">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
