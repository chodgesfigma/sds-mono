import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-youtube',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconYoutube {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16115)">
          <path
            d="M15.0266 4.27984C14.9474 3.96344 14.7862 3.67355 14.5591 3.43944C14.332 3.20533 14.0471 3.03529 13.7333 2.9465C12.5866 2.6665 7.99997 2.6665 7.99997 2.6665C7.99997 2.6665 3.41331 2.6665 2.26664 2.97317C1.95281 3.06196 1.66796 3.232 1.44087 3.46611C1.21378 3.70022 1.0525 3.99011 0.973308 4.3065C0.763451 5.47021 0.660798 6.65071 0.666641 7.83317C0.65916 9.02453 0.761819 10.214 0.973308 11.3865C1.06061 11.6931 1.22551 11.9719 1.45207 12.1962C1.67863 12.4204 1.95919 12.5824 2.26664 12.6665C3.41331 12.9732 7.99997 12.9732 7.99997 12.9732C7.99997 12.9732 12.5866 12.9732 13.7333 12.6665C14.0471 12.5777 14.332 12.4077 14.5591 12.1736C14.7862 11.9395 14.9474 11.6496 15.0266 11.3332C15.2349 10.1782 15.3375 9.00673 15.3333 7.83317C15.3408 6.64181 15.2381 5.4523 15.0266 4.27984Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M6.49997 10.0132L10.3333 7.83317L6.49997 5.65317V10.0132Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clip-path id="clip0_68_16115">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
