import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-upload-cloud',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconUploadCloud {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16069)">
          <path
            d="M10.6666 10.6667L7.99997 8.00007M7.99997 8.00007L5.33331 10.6667M7.99997 8.00007V14.0001M13.5933 12.2601C14.2435 11.9056 14.7572 11.3447 15.0532 10.6658C15.3492 9.98698 15.4108 9.22889 15.2281 8.5112C15.0454 7.7935 14.629 7.15708 14.0444 6.70237C13.4599 6.24766 12.7405 6.00056 12 6.00007H11.16C10.9582 5.21956 10.5821 4.49496 10.0599 3.88073C9.5378 3.2665 8.8832 2.77864 8.14537 2.45381C7.40754 2.12898 6.60567 1.97564 5.80005 2.00533C4.99443 2.03501 4.20602 2.24694 3.49409 2.62518C2.78216 3.00342 2.16525 3.53814 1.68972 4.18913C1.2142 4.84011 0.892434 5.59043 0.748627 6.38367C0.60482 7.17691 0.64271 7.99242 0.859449 8.76891C1.07619 9.5454 1.46613 10.2626 1.99997 10.8667"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16069">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
