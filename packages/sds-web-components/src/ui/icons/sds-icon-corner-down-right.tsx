import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-corner-down-right',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCornerDownRight {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M10 6.66669L13.3334 10M13.3334 10L10 13.3334M13.3334 10H5.33335C4.62611 10 3.94783 9.71907 3.44774 9.21897C2.94764 8.71887 2.66669 8.0406 2.66669 7.33335V2.66669"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
