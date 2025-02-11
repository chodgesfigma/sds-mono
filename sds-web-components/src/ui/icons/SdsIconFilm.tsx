import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-film',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconFilm {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15769)">
          <path
            d="M4.66665 1.33333V14.6667M11.3333 1.33333V14.6667M1.33331 8H14.6666M1.33331 4.66667H4.66665M1.33331 11.3333H4.66665M11.3333 11.3333H14.6666M11.3333 4.66667H14.6666M2.78665 1.33333H13.2133C14.016 1.33333 14.6666 1.98401 14.6666 2.78667V13.2133C14.6666 14.016 14.016 14.6667 13.2133 14.6667H2.78665C1.98399 14.6667 1.33331 14.016 1.33331 13.2133V2.78667C1.33331 1.98401 1.98399 1.33333 2.78665 1.33333Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15769">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
