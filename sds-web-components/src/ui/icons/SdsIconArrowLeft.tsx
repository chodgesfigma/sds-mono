import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-arrow-left',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconArrowLeft {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M12.6668 7.99992H3.3335M3.3335 7.99992L8.00016 12.6666M3.3335 7.99992L8.00016 3.33325"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
