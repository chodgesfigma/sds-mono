import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-divide',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconDivide {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M3.3335 8.00002H12.6668M9.3335 4.00002C9.3335 4.7364 8.73654 5.33335 8.00016 5.33335C7.26378 5.33335 6.66683 4.7364 6.66683 4.00002C6.66683 3.26364 7.26378 2.66669 8.00016 2.66669C8.73654 2.66669 9.3335 3.26364 9.3335 4.00002ZM9.3335 12C9.3335 12.7364 8.73654 13.3334 8.00016 13.3334C7.26378 13.3334 6.66683 12.7364 6.66683 12C6.66683 11.2636 7.26378 10.6667 8.00016 10.6667C8.73654 10.6667 9.3335 11.2636 9.3335 12Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
