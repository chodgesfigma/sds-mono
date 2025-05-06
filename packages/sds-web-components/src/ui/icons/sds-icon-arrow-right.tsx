import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-arrow-right',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconArrowRight {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M3.33331 7.99992H12.6666M12.6666 7.99992L7.99998 3.33325M12.6666 7.99992L7.99998 12.6666"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
