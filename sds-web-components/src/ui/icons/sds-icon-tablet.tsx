import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-tablet',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconTablet {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M8.00002 11.9999H8.00669M4.00002 1.33325H12C12.7364 1.33325 13.3334 1.93021 13.3334 2.66659V13.3333C13.3334 14.0696 12.7364 14.6666 12 14.6666H4.00002C3.26364 14.6666 2.66669 14.0696 2.66669 13.3333V2.66659C2.66669 1.93021 3.26364 1.33325 4.00002 1.33325Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
