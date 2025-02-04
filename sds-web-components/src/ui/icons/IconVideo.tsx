
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-video',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconVideo {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_16087)"><path d="M15.3332 4.66683L10.6665 8.00016L15.3332 11.3335V4.66683Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.33317 3.3335H1.99984C1.26346 3.3335 0.666504 3.93045 0.666504 4.66683V11.3335C0.666504 12.0699 1.26346 12.6668 1.99984 12.6668H9.33317C10.0696 12.6668 10.6665 12.0699 10.6665 11.3335V4.66683C10.6665 3.93045 10.0696 3.3335 9.33317 3.3335Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_16087"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}