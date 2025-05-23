import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-thermometer',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconThermometer {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16029)">
          <path
            d="M9.33341 9.84008V2.33341C9.33341 1.89139 9.15782 1.46746 8.84526 1.1549C8.5327 0.842343 8.10878 0.666748 7.66675 0.666748C7.22472 0.666748 6.8008 0.842343 6.48824 1.1549C6.17568 1.46746 6.00008 1.89139 6.00008 2.33341V9.84008C5.46493 10.1976 5.05896 10.7178 4.84213 11.3238C4.6253 11.9298 4.60909 12.5895 4.79592 13.2053C4.98274 13.8212 5.36269 14.3607 5.87964 14.7441C6.39659 15.1275 7.02314 15.3345 7.66675 15.3345C8.31036 15.3345 8.93691 15.1275 9.45386 14.7441C9.97081 14.3607 10.3508 13.8212 10.5376 13.2053C10.7244 12.5895 10.7082 11.9298 10.4914 11.3238C10.2745 10.7178 9.86856 10.1976 9.33341 9.84008Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16029">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
