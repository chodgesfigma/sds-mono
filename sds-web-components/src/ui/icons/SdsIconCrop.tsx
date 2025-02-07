import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-crop',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCrop {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15715)"><path d="M4.08669 0.666687L4.00002 10.6667C4.00002 11.0203 4.1405 11.3594 4.39054 11.6095C4.64059 11.8595 4.97973 12 5.33335 12H15.3334M0.666687 4.08669L10.6667 4.00002C11.0203 4.00002 11.3594 4.1405 11.6095 4.39054C11.8595 4.64059 12 4.97973 12 5.33335V15.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15715"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
