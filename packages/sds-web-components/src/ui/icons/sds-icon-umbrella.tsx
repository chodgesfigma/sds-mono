import { SdsIcon, Size } from '../primitives/sds-icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-umbrella',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconUmbrella {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16063)">
          <path
            d="M12.0001 12.6666C12.0001 13.197 11.7894 13.7057 11.4143 14.0808C11.0392 14.4559 10.5305 14.6666 10.0001 14.6666C9.46965 14.6666 8.96094 14.4559 8.58587 14.0808C8.21079 13.7057 8.00008 13.197 8.00008 12.6666V7.99992M15.3334 7.99992C15.1593 6.17563 14.3114 4.48175 12.9554 3.24903C11.5994 2.0163 9.83266 1.33325 8.00008 1.33325C6.1675 1.33325 4.40072 2.0163 3.04472 3.24903C1.68873 4.48175 0.840884 6.17563 0.666748 7.99992H15.3334Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16063">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
