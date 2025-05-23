import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-folder-plus',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconFolderPlus {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M7.99992 7.33333V11.3333M5.99992 9.33333H9.99992M14.6666 12.6667C14.6666 13.0203 14.5261 13.3594 14.2761 13.6095C14.026 13.8595 13.6869 14 13.3333 14H2.66659C2.31296 14 1.97382 13.8595 1.72378 13.6095C1.47373 13.3594 1.33325 13.0203 1.33325 12.6667V3.33333C1.33325 2.97971 1.47373 2.64057 1.72378 2.39052C1.97382 2.14048 2.31296 2 2.66659 2H5.99992L7.33325 4H13.3333C13.6869 4 14.026 4.14048 14.2761 4.39052C14.5261 4.64057 14.6666 4.97971 14.6666 5.33333V12.6667Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
