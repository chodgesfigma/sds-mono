import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-volume-1',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconVolume1 {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M10.36 5.64016C10.9849 6.26526 11.336 7.11295 11.336 7.99683C11.336 8.88071 10.9849 9.7284 10.36 10.3535M7.33334 3.3335L4.00001 6.00016H1.33334V10.0002H4.00001L7.33334 12.6668V3.3335Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
