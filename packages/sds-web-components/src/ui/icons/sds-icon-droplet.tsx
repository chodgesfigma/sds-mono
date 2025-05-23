import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-droplet',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconDroplet {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M7.99992 1.79333L11.7733 5.56667C12.5195 6.31241 13.0278 7.26271 13.2339 8.29737C13.4399 9.33203 13.3345 10.4046 12.9309 11.3793C12.5274 12.3541 11.8438 13.1872 10.9667 13.7734C10.0895 14.3596 9.05824 14.6725 8.00326 14.6725C6.94828 14.6725 5.91699 14.3596 5.03985 13.7734C4.16272 13.1872 3.47913 12.3541 3.07557 11.3793C2.672 10.4046 2.56659 9.33203 2.77266 8.29737C2.97873 7.26271 3.48703 6.31241 4.23326 5.56667L7.99992 1.79333Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
