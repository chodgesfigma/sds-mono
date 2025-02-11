import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-arrow-up-left',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconArrowUpLeft {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M11.3333 11.3334L4.66663 4.66675M4.66663 4.66675V11.3334M4.66663 4.66675H11.3333"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
