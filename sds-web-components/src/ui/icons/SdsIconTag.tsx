import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-tag',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconTag {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M4.66671 4.66659H4.67337M13.7267 8.93992L8.94671 13.7199C8.82288 13.8439 8.67583 13.9422 8.51396 14.0093C8.3521 14.0764 8.17859 14.111 8.00337 14.111C7.82815 14.111 7.65465 14.0764 7.49279 14.0093C7.33092 13.9422 7.18387 13.8439 7.06004 13.7199L1.33337 7.99992V1.33325H8.00004L13.7267 7.05992C13.975 7.30974 14.1144 7.64767 14.1144 7.99992C14.1144 8.35217 13.975 8.6901 13.7267 8.93992Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
