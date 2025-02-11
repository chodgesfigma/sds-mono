import { Component, h, Element } from '@stencil/core';
// import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

// type SdsLabelProps = JSXBase.LabelHTMLAttributes<HTMLLabelElement>;

/**
 * Fieldset Label
 */
@Component({
  tag: 'sds-label',
  styleUrl: 'sds-label.scss',
  shadow: false,
})
export class SdsLabel {
  @Element() el!: HTMLLabelElement;

  render() {
    const className = clsx('label');
    return (
      <label htmlFor={this.el.htmlFor} class={className}>
        <slot />
      </label>
    );
  }
}
