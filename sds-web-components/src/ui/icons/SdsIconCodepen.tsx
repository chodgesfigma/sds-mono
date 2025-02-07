import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-codepen',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCodepen {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15681)"><path d="M8.00004 1.33337L14.6667 5.66671M8.00004 1.33337L1.33337 5.66671M8.00004 1.33337V5.66671M14.6667 5.66671V10.3334M14.6667 5.66671L8.00004 10.3334M14.6667 10.3334L8.00004 14.6667M14.6667 10.3334L8.00004 5.66671M8.00004 14.6667L1.33337 10.3334M8.00004 14.6667V10.3334M1.33337 10.3334V5.66671M1.33337 10.3334L8.00004 5.66671M1.33337 5.66671L8.00004 10.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15681"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
