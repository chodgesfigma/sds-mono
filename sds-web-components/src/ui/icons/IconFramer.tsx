
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-framer',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconFramer {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        <g clip-path="url(#clip0_68_15781)"><path d="M3.3335 10.6667V6H12.6668V1.33333H3.3335L12.6668 10.6667H8.00016M3.3335 10.6667L8.00016 15.3333V10.6667M3.3335 10.6667H8.00016" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clip-path id="clip0_68_15781"><rect width="16" height="16" fill="white"/></clip-path></defs>
      </Icon>
    );
  }
}