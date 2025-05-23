import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-minimize',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconMinimize {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M5.33333 2V4C5.33333 4.35362 5.19286 4.69276 4.94281 4.94281C4.69276 5.19286 4.35362 5.33333 4 5.33333H2M14 5.33333H12C11.6464 5.33333 11.3072 5.19286 11.0572 4.94281C10.8071 4.69276 10.6667 4.35362 10.6667 4V2M10.6667 14V12C10.6667 11.6464 10.8071 11.3072 11.0572 11.0572C11.3072 10.8071 11.6464 10.6667 12 10.6667H14M2 10.6667H4C4.35362 10.6667 4.69276 10.8071 4.94281 11.0572C5.19286 11.3072 5.33333 11.6464 5.33333 12V14"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
