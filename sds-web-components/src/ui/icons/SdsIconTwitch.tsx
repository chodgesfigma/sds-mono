import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-twitch',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconTwitch {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M7.33333 7.33325V4.66659M10.6667 7.33325V4.66659M14 1.33325H2V11.9999H5.33333V14.6666L8 11.9999H11.3333L14 9.33325V1.33325Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
