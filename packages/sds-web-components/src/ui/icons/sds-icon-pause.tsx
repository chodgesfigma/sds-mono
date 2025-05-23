import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-pause',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconPause {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M6.66667 2.66663H4V13.3333H6.66667V2.66663Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 2.66663H9.33333V13.3333H12V2.66663Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </SdsIcon>
    );
  }
}
