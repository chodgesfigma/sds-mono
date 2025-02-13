import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-shield-off',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconShieldOff {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15979)">
          <path
            d="M13.1265 9.33341C13.2606 8.90154 13.3302 8.45227 13.3332 8.00008V3.33341L7.99984 1.33341L5.89317 2.12008M3.15317 3.15341L2.6665 3.33341V8.00008C2.6665 12.0001 7.99984 14.6667 7.99984 14.6667C9.41119 13.922 10.6796 12.9335 11.7465 11.7467M0.666504 0.666748L15.3332 15.3334"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15979">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
