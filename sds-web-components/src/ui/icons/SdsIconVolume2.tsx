import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-volume-2',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconVolume2 {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M12.7133 3.28662C13.9631 4.53681 14.6652 6.23219 14.6652 7.99995C14.6652 9.76772 13.9631 11.4631 12.7133 12.7133M10.36 5.63995C10.9849 6.26505 11.3359 7.11274 11.3359 7.99662C11.3359 8.8805 10.9849 9.7282 10.36 10.3533M7.33331 3.33329L3.99998 5.99995H1.33331V9.99996H3.99998L7.33331 12.6666V3.33329Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
