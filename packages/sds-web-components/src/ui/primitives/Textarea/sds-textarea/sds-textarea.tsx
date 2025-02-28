import { SdsTextareaFunctional, SdsTextareaProps } from './sds-textarea-functional';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-textarea',
  styleUrl: 'sds-textarea.scss',
  shadow: true,
})
export class SdsTextarea {
  /**
   * Value for the textarea
   */
  @Prop({ reflect: true }) value?: SdsTextareaProps['value'];

  /**
   * Disables the textarea
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Placeholder text for the textarea
   */
  @Prop() placeholder = '';

  /**
   * Marks the textarea as required
   */
  @Prop({ reflect: true }) required = false;

  /**
   * Allows the textarea to be resized
   */
  @Prop() resizable = true;

  render() {
    return (
      <Host>
        <SdsTextareaFunctional resizable={this.resizable} value={this.value} disabled={this.disabled} placeholder={this.placeholder} required={this.required} />
      </Host>
    );
  }
}
