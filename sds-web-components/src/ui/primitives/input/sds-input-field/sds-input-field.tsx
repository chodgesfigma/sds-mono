import { SdsDescriptionFunctional } from '../../fieldset/sds-description/sds-description-functional';
import { SdsFieldErrorFunctional } from '../../fieldset/sds-field-error/sds-field-error-functional';
import { SdsLabelFunctional } from '../../fieldset/sds-label/sds-label-functional';
import { SdsInputFunctional, SdsInputProps } from '../sds-input/sds-input-functional';
import { Component, Prop, h } from '@stencil/core';
import { State } from '@stencil/core/internal';

/**
 * Input Field
 */
@Component({
  tag: 'sds-input-field',
  styleUrls: ['sds-input-field.scss'],
  shadow: true,
})
export class SdsInputField {
  /**
   * A reference to the input field
   */
  textInput!: HTMLInputElement;

  /**
   * The value that the input field has
   */
  @State() inputValue: SdsInputProps['value'] = '';

  /**
   * Sets the default value for the input
   */
  @Prop() defaultValue: SdsInputProps['defaultValue'] = '';

  /**
   * The input label
   */
  @Prop() label = '';

  /**
   * A secondary label below the input
   */
  @Prop() description = '';

  /**
   * Placeholder text for the input
   */
  @Prop() placeholder = '';

  /**
   * An error message that appears below the input
   */
  @Prop() error = '';

  /**
   * Disables the input
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Marks the input as required
   */
  @Prop({ reflect: true }) required = false;

  /**
   * The type of input
   */
  @Prop({ reflect: true }) type: SdsInputProps['type'] = '';

  componentDidLoad() {
    this.inputValue = this.defaultValue ?? '';
  }

  /**
   * Update the internal component value when the input field is changed
   */
  handleInputChange = () => {
    this.inputValue = this.textInput.value;
  };

  render() {
    return (
      <sds-field disabled={this.disabled}>
        {this.label && (
          <SdsLabelFunctional htmlFor="input" id="label">
            {this.label}
          </SdsLabelFunctional>
        )}
        <SdsInputFunctional
          type={this.type}
          required={this.required}
          disabled={this.disabled}
          placeholder={this.placeholder}
          id="input"
          aria-describedby={`description${this.error ? ' error' : ''}`}
          aria-labelledby="label"
          value={this.inputValue}
          defaultValue={this.defaultValue}
          onChange={this.handleInputChange}
          onInput={this.handleInputChange}
          onKeyUp={this.handleInputChange}
          ref={el => {
            this.textInput = el as HTMLInputElement;
          }}
        />
        {this.description && <SdsDescriptionFunctional id="description">{this.description}</SdsDescriptionFunctional>}
        {this.error && <SdsFieldErrorFunctional id="error">{this.error}</SdsFieldErrorFunctional>}
      </sds-field>
    );
  }
}
