import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-triangle',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconTriangle {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M6.86001 2.57323L1.21335 11.9999C1.09693 12.2015 1.03533 12.4301 1.03467 12.6629C1.03402 12.8957 1.09434 13.1246 1.20963 13.3269C1.32492 13.5292 1.49116 13.6977 1.69182 13.8158C1.89247 13.9339 2.12055 13.9973 2.35335 13.9999H13.6467C13.8795 13.9973 14.1076 13.9339 14.3082 13.8158C14.5089 13.6977 14.6751 13.5292 14.7904 13.3269C14.9057 13.1246 14.966 12.8957 14.9654 12.6629C14.9647 12.4301 14.9031 12.2015 14.7867 11.9999L9.14001 2.57323C9.02117 2.3773 8.85383 2.21531 8.65414 2.10288C8.45446 1.99046 8.22917 1.9314 8.00001 1.9314C7.77086 1.9314 7.54557 1.99046 7.34588 2.10288C7.1462 2.21531 6.97886 2.3773 6.86001 2.57323Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
