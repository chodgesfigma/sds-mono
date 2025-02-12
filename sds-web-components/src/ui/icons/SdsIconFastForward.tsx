import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-fast-forward',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconFastForward {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M8.66671 12.6667L14.6667 7.99999L8.66671 3.33333V12.6667Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.33337 12.6667L7.33337 7.99999L1.33337 3.33333V12.6667Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </SdsIcon>
    );
  }
}
