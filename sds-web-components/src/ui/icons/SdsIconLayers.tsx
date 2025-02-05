import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-layers',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconLayers {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15829)"><path d="M1.33325 11.3333L7.99992 14.6666L14.6666 11.3333M1.33325 7.99998L7.99992 11.3333L14.6666 7.99998M7.99992 1.33331L1.33325 4.66665L7.99992 7.99998L14.6666 4.66665L7.99992 1.33331Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15829"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </SdsIcon>
    );
  }
}
