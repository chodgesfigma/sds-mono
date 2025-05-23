import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-headphones',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconHeadphones {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M2 12V8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8V12M14 12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H12C11.6464 14 11.3072 13.8595 11.0572 13.6095C10.8071 13.3594 10.6667 13.0203 10.6667 12.6667V10.6667C10.6667 10.313 10.8071 9.97391 11.0572 9.72386C11.3072 9.47381 11.6464 9.33333 12 9.33333H14V12.6667ZM2 12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H4C4.35362 14 4.69276 13.8595 4.94281 13.6095C5.19286 13.3594 5.33333 13.0203 5.33333 12.6667V10.6667C5.33333 10.313 5.19286 9.97391 4.94281 9.72386C4.69276 9.47381 4.35362 9.33333 4 9.33333H2V12.6667Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
