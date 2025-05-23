import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-mic-off',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconMicOff {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15869)">
          <path
            d="M0.666748 0.666687L15.3334 15.3334M6.00008 6.00002V8.00002C6.00043 8.39533 6.11792 8.78167 6.3377 9.11024C6.55749 9.43882 6.86972 9.69489 7.23495 9.84612C7.60019 9.99735 8.00205 10.037 8.38978 9.95993C8.77751 9.8829 9.13372 9.6927 9.41341 9.41335M10.0001 6.22669V2.66669C10.0006 2.17071 9.81677 1.69223 9.48433 1.32415C9.15189 0.956074 8.69455 0.724648 8.20108 0.674803C7.70761 0.624958 7.21322 0.760249 6.81389 1.05441C6.41456 1.34858 6.13878 1.78063 6.04008 2.26669M11.3334 11.3C10.6826 11.9643 9.84817 12.419 8.93715 12.6058C8.02614 12.7925 7.0801 12.7028 6.22041 12.3482C5.36072 11.9936 4.62659 11.3902 4.11219 10.6155C3.5978 9.84071 3.32661 8.92996 3.33341 8.00002V6.66669M12.6667 6.66669V8.00002C12.6665 8.27498 12.642 8.54938 12.5934 8.82002M8.00008 12.6667V15.3334M5.33341 15.3334H10.6667"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15869">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
