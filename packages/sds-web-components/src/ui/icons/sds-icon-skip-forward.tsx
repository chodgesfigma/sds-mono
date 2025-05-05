import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-skip-forward',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconSkipForward {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M12.6666 3.33341V12.6667M3.33325 2.66675L9.99992 8.00008L3.33325 13.3334V2.66675Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
