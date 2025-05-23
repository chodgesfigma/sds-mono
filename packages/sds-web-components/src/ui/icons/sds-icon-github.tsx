import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-github',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconGithub {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15795)">
          <path
            d="M5.99992 12.6667C2.66659 13.6667 2.66659 11 1.33325 10.6667M10.6666 14.6667V12.0867C10.6916 11.7688 10.6486 11.4492 10.5406 11.1492C10.4325 10.8492 10.2619 10.5756 10.0399 10.3467C12.1333 10.1133 14.3333 9.32 14.3333 5.68C14.3331 4.74922 13.975 3.85413 13.3333 3.18C13.6372 2.36567 13.6157 1.46557 13.2733 0.666666C13.2733 0.666666 12.4866 0.433332 10.6666 1.65333C9.13859 1.23921 7.52791 1.23921 5.99992 1.65333C4.17992 0.433332 3.39325 0.666666 3.39325 0.666666C3.05084 1.46557 3.02935 2.36567 3.33325 3.18C2.68667 3.85913 2.32827 4.76231 2.33325 5.7C2.33325 9.31333 4.53325 10.1067 6.62659 10.3667C6.40725 10.5933 6.23809 10.8636 6.13012 11.1599C6.02215 11.4563 5.97779 11.772 5.99992 12.0867V14.6667"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15795">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
