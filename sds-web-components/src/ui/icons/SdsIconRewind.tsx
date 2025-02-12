import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-rewind',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconRewind {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M7.33325 12.6666L1.33325 7.99992L7.33325 3.33325V12.6666Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.6666 12.6666L8.66658 7.99992L14.6666 3.33325V12.6666Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </SdsIcon>
    );
  }
}
