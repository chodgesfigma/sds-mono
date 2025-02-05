import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-corner-down-left',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCornerDownLeft {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M5.99999 6.66669L2.66666 10M2.66666 10L5.99999 13.3334M2.66666 10H10.6667C11.3739 10 12.0522 9.71907 12.5523 9.21897C13.0524 8.71887 13.3333 8.0406 13.3333 7.33335V2.66669" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
