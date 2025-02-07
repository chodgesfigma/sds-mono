import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-filter',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconFilter {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
