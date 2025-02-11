import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-database',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconDatabase {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M14 3.33331C14 4.43788 11.3137 5.33331 8 5.33331C4.68629 5.33331 2 4.43788 2 3.33331M14 3.33331C14 2.22874 11.3137 1.33331 8 1.33331C4.68629 1.33331 2 2.22874 2 3.33331M14 3.33331V12.6666C14 13.7733 11.3333 14.6666 8 14.6666C4.66667 14.6666 2 13.7733 2 12.6666V3.33331M14 7.99998C14 9.10665 11.3333 9.99998 8 9.99998C4.66667 9.99998 2 9.10665 2 7.99998"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
