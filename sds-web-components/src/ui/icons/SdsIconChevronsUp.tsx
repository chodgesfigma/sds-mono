import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-chevrons-up',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconChevronsUp {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M11.3332 7.33333L7.99984 4L4.6665 7.33333M11.3332 12L7.99984 8.66667L4.6665 12"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
