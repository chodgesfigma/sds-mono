import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-thumbs-down',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconThumbsDown {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16031)">
          <path
            d="M11.3334 8.66658L8.66669 14.6666C8.13625 14.6666 7.62755 14.4559 7.25247 14.0808C6.8774 13.7057 6.66669 13.197 6.66669 12.6666V9.99991H2.89335C2.70008 10.0021 2.50864 9.96225 2.33231 9.8831C2.15597 9.80396 1.99894 9.68743 1.87211 9.54157C1.74529 9.39572 1.65168 9.22403 1.59779 9.03841C1.5439 8.85279 1.53102 8.65768 1.56002 8.46658L2.48002 2.46658C2.52824 2.14864 2.68973 1.85884 2.93475 1.65058C3.17977 1.44231 3.4918 1.32961 3.81335 1.33325H11.3334M11.3334 8.66658V1.33325M11.3334 8.66658H13.1134C13.4907 8.67325 13.8573 8.54116 14.1436 8.29537C14.43 8.04958 14.6161 7.70721 14.6667 7.33325V2.66658C14.6161 2.29262 14.43 1.95025 14.1436 1.70446C13.8573 1.45867 13.4907 1.32658 13.1134 1.33325H11.3334"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16031">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
