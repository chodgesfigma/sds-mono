import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-truck',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconTruck {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16053)">
          <path
            d="M10.6665 10.6667V2H0.666504V10.6667H10.6665ZM10.6665 10.6667H15.3332V7.33333L13.3332 5.33333H10.6665L10.6665 10.6667ZM5.33317 12.3333C5.33317 13.2538 4.58698 14 3.6665 14C2.74603 14 1.99984 13.2538 1.99984 12.3333C1.99984 11.4129 2.74603 10.6667 3.6665 10.6667C4.58698 10.6667 5.33317 11.4129 5.33317 12.3333ZM13.9998 12.3333C13.9998 13.2538 13.2536 14 12.3332 14C11.4127 14 10.6665 13.2538 10.6665 12.3333C10.6665 11.4129 11.4127 10.6667 12.3332 10.6667C13.2536 10.6667 13.9998 11.4129 13.9998 12.3333Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16053">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
