import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-mail',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconMail {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path d="M14.6666 3.99996C14.6666 3.26663 14.0666 2.66663 13.3333 2.66663H2.66659C1.93325 2.66663 1.33325 3.26663 1.33325 3.99996M14.6666 3.99996V12C14.6666 12.7333 14.0666 13.3333 13.3333 13.3333H2.66659C1.93325 13.3333 1.33325 12.7333 1.33325 12V3.99996M14.6666 3.99996L7.99992 8.66663L1.33325 3.99996" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </SdsIcon>
    );
  }
}
