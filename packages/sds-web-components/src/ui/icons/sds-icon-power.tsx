import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-power',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconPower {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M12.2399 4.42659C13.0788 5.26578 13.6501 6.33488 13.8814 7.49871C14.1128 8.66254 13.9939 9.86884 13.5397 10.9651C13.0855 12.0613 12.3165 12.9983 11.3298 13.6575C10.3431 14.3167 9.18319 14.6685 7.99658 14.6685C6.80998 14.6685 5.65002 14.3167 4.66337 13.6575C3.67671 12.9983 2.90768 12.0613 2.45349 10.9651C1.99931 9.86884 1.88038 8.66254 2.11173 7.49871C2.34308 6.33488 2.91433 5.26578 3.75325 4.42659M7.99992 1.33325V7.99992"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
