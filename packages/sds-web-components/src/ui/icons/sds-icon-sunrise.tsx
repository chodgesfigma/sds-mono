import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-sunrise',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconSunrise {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16015)">
          <path
            d="M11.3332 11.9999C11.3332 11.1159 10.982 10.268 10.3569 9.6429C9.73174 9.01777 8.88389 8.66658 7.99984 8.66658C7.11578 8.66658 6.26794 9.01777 5.64281 9.6429C5.01769 10.268 4.6665 11.1159 4.6665 11.9999M7.99984 1.33325V5.99992M7.99984 1.33325L5.33317 3.99992M7.99984 1.33325L10.6665 3.99992M2.81317 6.81325L3.75984 7.75992M0.666504 11.9999H1.99984M13.9998 11.9999H15.3332M12.2398 7.75992L13.1865 6.81325M15.3332 14.6666H0.666504"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16015">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
