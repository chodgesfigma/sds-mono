import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-send',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconSend {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15969)"><path d="M14.6667 1.33325L7.33337 8.66658M14.6667 1.33325L10 14.6666L7.33337 8.66658M14.6667 1.33325L1.33337 5.99992L7.33337 8.66658" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15969"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
