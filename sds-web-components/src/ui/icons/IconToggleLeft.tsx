import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-toggle-left',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconToggleLeft {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_16035)"><path d="M10.6665 3.33325H5.33317C2.75584 3.33325 0.666504 5.42259 0.666504 7.99992C0.666504 10.5772 2.75584 12.6666 5.33317 12.6666H10.6665C13.2438 12.6666 15.3332 10.5772 15.3332 7.99992C15.3332 5.42259 13.2438 3.33325 10.6665 3.33325Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.33317 9.99992C6.43774 9.99992 7.33317 9.10449 7.33317 7.99992C7.33317 6.89535 6.43774 5.99992 5.33317 5.99992C4.2286 5.99992 3.33317 6.89535 3.33317 7.99992C3.33317 9.10449 4.2286 9.99992 5.33317 9.99992Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16035"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
