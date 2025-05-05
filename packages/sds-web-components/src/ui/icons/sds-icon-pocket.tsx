import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-pocket',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconPocket {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M5.33325 6.66667L7.99992 9.33333L10.6666 6.66667M2.66659 2H13.3333C13.6869 2 14.026 2.14048 14.2761 2.39052C14.5261 2.64057 14.6666 2.97971 14.6666 3.33333V7.33333C14.6666 9.10144 13.9642 10.7971 12.714 12.0474C11.4637 13.2976 9.76803 14 7.99992 14C7.12444 14 6.25753 13.8276 5.4487 13.4925C4.63986 13.1575 3.90493 12.6664 3.28587 12.0474C2.03563 10.7971 1.33325 9.10144 1.33325 7.33333V3.33333C1.33325 2.97971 1.47373 2.64057 1.72378 2.39052C1.97382 2.14048 2.31296 2 2.66659 2Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
