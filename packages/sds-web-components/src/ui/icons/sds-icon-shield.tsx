import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-shield',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconShield {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M7.99984 14.6666C7.99984 14.6666 13.3332 11.9999 13.3332 7.99992V3.33325L7.99984 1.33325L2.6665 3.33325V7.99992C2.6665 11.9999 7.99984 14.6666 7.99984 14.6666Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
