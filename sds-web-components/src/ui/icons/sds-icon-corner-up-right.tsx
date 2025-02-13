import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-corner-up-right',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCornerUpRight {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M9.99984 9.33335L13.3332 6.00002M13.3332 6.00002L9.99984 2.66669M13.3332 6.00002H5.33317C4.62593 6.00002 3.94765 6.28097 3.44755 6.78107C2.94746 7.28117 2.6665 7.95944 2.6665 8.66669V13.3334"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
