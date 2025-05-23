import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-corner-left-up',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCornerLeftUp {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M9.33329 6.00002L5.99996 2.66669M5.99996 2.66669L2.66663 6.00002M5.99996 2.66669V10.6667C5.99996 11.3739 6.28091 12.0522 6.78101 12.5523C7.2811 13.0524 7.95938 13.3334 8.66663 13.3334H13.3333"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
