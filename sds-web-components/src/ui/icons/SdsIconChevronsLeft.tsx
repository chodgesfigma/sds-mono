import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-chevrons-left',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconChevronsLeft {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M7.33333 11.3333L4 7.99996L7.33333 4.66663M12 11.3333L8.66667 7.99996L12 4.66663" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
