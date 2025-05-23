import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-speaker',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconSpeaker {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M7.99996 3.99992H8.00663M3.99996 1.33325H12C12.7363 1.33325 13.3333 1.93021 13.3333 2.66659V13.3333C13.3333 14.0696 12.7363 14.6666 12 14.6666H3.99996C3.26358 14.6666 2.66663 14.0696 2.66663 13.3333V2.66659C2.66663 1.93021 3.26358 1.33325 3.99996 1.33325ZM10.6666 9.33325C10.6666 10.806 9.47272 11.9999 7.99996 11.9999C6.5272 11.9999 5.33329 10.806 5.33329 9.33325C5.33329 7.86049 6.5272 6.66658 7.99996 6.66658C9.47272 6.66658 10.6666 7.86049 10.6666 9.33325Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
