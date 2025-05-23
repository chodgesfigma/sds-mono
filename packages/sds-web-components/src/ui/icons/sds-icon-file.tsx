import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-file',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconFile {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M8.66666 1.33333H3.99999C3.64637 1.33333 3.30723 1.47381 3.05718 1.72386C2.80713 1.9739 2.66666 2.31304 2.66666 2.66667V13.3333C2.66666 13.687 2.80713 14.0261 3.05718 14.2761C3.30723 14.5262 3.64637 14.6667 3.99999 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2761C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V6M8.66666 1.33333L13.3333 6M8.66666 1.33333L8.66666 6H13.3333"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
