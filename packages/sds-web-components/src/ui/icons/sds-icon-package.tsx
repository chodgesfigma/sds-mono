import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-package',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconPackage {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M11 6.26668L5 2.80668M2.18 4.64002L8 8.00668L13.82 4.64002M8 14.72V8.00002M14 10.6667V5.33335C13.9998 5.09953 13.938 4.86989 13.821 4.66746C13.704 4.46503 13.5358 4.29692 13.3333 4.18002L8.66667 1.51335C8.46397 1.39633 8.23405 1.33472 8 1.33472C7.76595 1.33472 7.53603 1.39633 7.33333 1.51335L2.66667 4.18002C2.46417 4.29692 2.29599 4.46503 2.17897 4.66746C2.06196 4.86989 2.00024 5.09953 2 5.33335V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3326C2.29599 11.535 2.46417 11.7031 2.66667 11.82L7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L13.3333 11.82C13.5358 11.7031 13.704 11.535 13.821 11.3326C13.938 11.1301 13.9998 10.9005 14 10.6667Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
