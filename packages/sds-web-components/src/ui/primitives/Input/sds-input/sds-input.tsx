import { SdsInputFunctional, SdsInputProps } from './sds-input-functional';
import { Component, h, Prop } from '@stencil/core';

/**
 * Input
 */
@Component({
  tag: 'sds-input',
  styleUrl: 'sds-input.scss',
  shadow: true,
})
export class SdsInput {
  @Prop({ reflect: true }) value?: SdsInputProps['value'];
  /**
   * Sets the default value for the input
   */
  @Prop() defaultValue = '';

  /**
   * Disables the input
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Placeholder text for the input
   */
  @Prop() placeholder = '';

  /**
   * Marks the input as required
   */
  @Prop({ reflect: true }) required = false;

  /**
   * The type of input
   */
  @Prop({ reflect: true }) type: SdsInputProps['type'] = '';

  render() {
    return (
      <SdsInputFunctional placeholder={this.placeholder} value={this.value} defaultValue={this.defaultValue} disabled={this.disabled} required={this.required} type={this.type}>
        <slot />
      </SdsInputFunctional>
    );
  }
}
