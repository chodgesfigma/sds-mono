import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-chevrons-right',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconChevronsRight {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M8.66667 11.3333L12 7.99996L8.66667 4.66663M4 11.3333L7.33333 7.99996L4 4.66663"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
