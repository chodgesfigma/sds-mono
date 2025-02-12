import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-voicemail',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconVoicemail {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16089)">
          <path
            d="M3.6665 10.6665C5.32336 10.6665 6.6665 9.32336 6.6665 7.6665C6.6665 6.00965 5.32336 4.6665 3.6665 4.6665C2.00965 4.6665 0.666504 6.00965 0.666504 7.6665C0.666504 9.32336 2.00965 10.6665 3.6665 10.6665ZM3.6665 10.6665H12.3332M12.3332 10.6665C13.99 10.6665 15.3332 9.32336 15.3332 7.6665C15.3332 6.00965 13.99 4.6665 12.3332 4.6665C10.6763 4.6665 9.33317 6.00965 9.33317 7.6665C9.33317 9.32336 10.6763 10.6665 12.3332 10.6665Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16089">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
