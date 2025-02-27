import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-arrow-up-right',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconArrowUpRight {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M4.66675 11.3334L11.3334 4.66675M11.3334 4.66675H4.66675M11.3334 4.66675V11.3334"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
