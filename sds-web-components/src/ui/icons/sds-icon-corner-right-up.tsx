import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-corner-right-up',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCornerRightUp {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M6.66675 6.00002L10.0001 2.66669M10.0001 2.66669L13.3334 6.00002M10.0001 2.66669V10.6667C10.0001 11.3739 9.71913 12.0522 9.21903 12.5523C8.71893 13.0524 8.04066 13.3334 7.33341 13.3334H2.66675"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
