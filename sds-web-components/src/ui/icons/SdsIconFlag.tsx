import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-flag',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconFlag {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M2.66663 10C2.66663 10 3.33329 9.33333 5.33329 9.33333C7.33329 9.33333 8.66663 10.6667 10.6666 10.6667C12.6666 10.6667 13.3333 10 13.3333 10V2C13.3333 2 12.6666 2.66667 10.6666 2.66667C8.66663 2.66667 7.33329 1.33333 5.33329 1.33333C3.33329 1.33333 2.66663 2 2.66663 2V10ZM2.66663 10V14.6667" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
