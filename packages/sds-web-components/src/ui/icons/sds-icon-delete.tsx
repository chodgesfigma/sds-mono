import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-delete',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconDelete {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15721)">
          <path
            d="M12.0001 6.00002L8.00008 10M8.00008 6.00002L12.0001 10M14.0001 2.66669H5.33341L0.666748 8.00002L5.33341 13.3334H14.0001C14.3537 13.3334 14.6928 13.1929 14.9429 12.9428C15.1929 12.6928 15.3334 12.3536 15.3334 12V4.00002C15.3334 3.6464 15.1929 3.30726 14.9429 3.05721C14.6928 2.80716 14.3537 2.66669 14.0001 2.66669Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15721">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
