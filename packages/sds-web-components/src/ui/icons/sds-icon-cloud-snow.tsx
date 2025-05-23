import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-cloud-snow',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCloudSnow {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15675)">
          <path
            d="M13.3332 11.72C14.034 11.413 14.6079 10.8743 14.9586 10.1943C15.3092 9.51432 15.4153 8.73438 15.2589 7.98543C15.1026 7.23648 14.6933 6.56411 14.0999 6.08119C13.5065 5.59828 12.765 5.3342 11.9999 5.3333H11.1599C10.9485 4.51499 10.5458 3.7586 9.98473 3.1265C9.4237 2.49441 8.72048 2.00469 7.93304 1.69772C7.14559 1.39075 6.29646 1.27532 5.45565 1.36093C4.61483 1.44655 3.8064 1.73077 3.09699 2.19016C2.38758 2.64955 1.7975 3.27096 1.3754 4.00317C0.95329 4.73538 0.711241 5.55742 0.669201 6.40154C0.62716 7.24566 0.786332 8.08768 1.1336 8.85821C1.48086 9.62873 2.00627 10.3057 2.66653 10.8333M5.33319 10.6666H5.33986M5.33319 13.3333H5.33986M7.99986 12H8.00653M7.99986 14.6666H8.00653M10.6665 10.6666H10.6732M10.6665 13.3333H10.6732"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15675">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
