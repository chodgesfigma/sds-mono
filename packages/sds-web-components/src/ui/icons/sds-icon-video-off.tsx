import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-video-off',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconVideoOff {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16085)">
          <path
            d="M10.6667 10.6665V11.3332C10.6667 11.6868 10.5263 12.0259 10.2762 12.276C10.0262 12.526 9.68704 12.6665 9.33341 12.6665H2.00008C1.64646 12.6665 1.30732 12.526 1.05727 12.276C0.807224 12.0259 0.666748 11.6868 0.666748 11.3332V4.6665C0.666748 4.31288 0.807224 3.97374 1.05727 3.72369C1.30732 3.47365 1.64646 3.33317 2.00008 3.33317H3.33341M7.10675 3.33317H9.33341C9.68704 3.33317 10.0262 3.47365 10.2762 3.72369C10.5263 3.97374 10.6667 4.31288 10.6667 4.6665V6.89317L11.3334 7.55984L15.3334 4.6665V11.3332M0.666748 0.666504L15.3334 15.3332"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16085">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
