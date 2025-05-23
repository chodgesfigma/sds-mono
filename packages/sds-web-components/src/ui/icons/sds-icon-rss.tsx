import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-rss',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconRss {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M2.6665 7.33341C4.2578 7.33341 5.78393 7.96556 6.90914 9.09077C8.03436 10.216 8.6665 11.7421 8.6665 13.3334M2.6665 2.66675C5.49548 2.66675 8.20859 3.79055 10.209 5.79094C12.2094 7.79133 13.3332 10.5044 13.3332 13.3334M3.99984 12.6667C3.99984 13.0349 3.70136 13.3334 3.33317 13.3334C2.96498 13.3334 2.6665 13.0349 2.6665 12.6667C2.6665 12.2986 2.96498 12.0001 3.33317 12.0001C3.70136 12.0001 3.99984 12.2986 3.99984 12.6667Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
