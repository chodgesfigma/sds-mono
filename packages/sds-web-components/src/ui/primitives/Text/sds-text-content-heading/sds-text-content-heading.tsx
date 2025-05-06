import { TextAlign } from '../types';
import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-text-content-heading',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextContentHeading {
  /**
   * Align position
   */
  @Prop() align: TextAlign = 'start';

  /**
   * Heading
   */
  @Prop() heading: string = '';

  /**
   * Sub Heading
   */
  @Prop() subHeading: string = '';

  render() {
    const classNames = clsx('text-content-heading', `text-align-${this.align}`);

    return (
      <sds-flex direction="column" gap="200" class={classNames}>
        <sds-text-heading>{this.heading}</sds-text-heading>
        {this.subHeading && <sds-text-subheading>{this.subHeading}</sds-text-subheading>}
      </sds-flex>
    );
  }
}
