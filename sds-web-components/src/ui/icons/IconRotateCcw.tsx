import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-rotate-ccw',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconRotateCcw {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15957)"><path d="M0.666748 2.66655V6.66655M0.666748 6.66655H4.66675M0.666748 6.66655L3.76008 3.75988C4.68069 2.84083 5.87505 2.24586 7.1632 2.06463C8.45135 1.88339 9.76351 2.12571 10.902 2.75506C12.0404 3.38441 12.9435 4.36671 13.4752 5.55395C14.0068 6.74119 14.1382 8.06905 13.8496 9.33746C13.5609 10.6059 12.8679 11.7461 11.8748 12.5864C10.8818 13.4267 9.64258 13.9215 8.34389 13.9962C7.0452 14.0709 5.7574 13.7216 4.67452 13.0008C3.59164 12.28 2.77234 11.2268 2.34008 9.99988" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15957"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}
