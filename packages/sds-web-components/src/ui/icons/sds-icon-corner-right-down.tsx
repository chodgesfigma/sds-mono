import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-corner-right-down',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCornerRightDown {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M6.66675 10L10.0001 13.3334M10.0001 13.3334L13.3334 10M10.0001 13.3334V5.33335C10.0001 4.62611 9.71913 3.94783 9.21903 3.44774C8.71893 2.94764 8.04066 2.66669 7.33341 2.66669H2.66675"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
