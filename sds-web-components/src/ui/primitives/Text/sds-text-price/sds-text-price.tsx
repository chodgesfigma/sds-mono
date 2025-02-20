import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-text-price',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextPrice {
  /**
   * Element type
   */
  @Prop() elementType: string = 'p';

  /**
   * Price
   */
  @Prop() price: string = '';

  /**
   * Currency
   */
  @Prop() currency: string = '';

  /**
   * Size of text
   */
  @Prop() size: 'small' | 'large' = 'large';

  /**
   * Label
   */
  @Prop() label?: string;

  render() {
    const classNames = clsx(`text-price`, `text-price-size-${this.size}`);

    const content = (
      <>
        <sup class="text-price-currency">{this.currency}</sup>
        {this.price}
      </>
    );

    return (
      <p class={classNames}>
        {this.size === 'small' ? <sds-text-heading elementType="span">{content}</sds-text-heading> : <sds-text-title-page elementType="span">{content}</sds-text-title-page>}

        {this.label && <sds-text-small>{this.label}</sds-text-small>}
      </p>
    );
  }
}
