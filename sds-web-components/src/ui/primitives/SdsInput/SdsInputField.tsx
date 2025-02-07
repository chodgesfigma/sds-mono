import { Component, Prop, h } from '@stencil/core';
import { JSXBase, State } from '@stencil/core/internal';
import { SdsLabel } from '../SdsFieldset/SdsLabel';
import { SdsInput } from './SdsInput';
import { SdsDescription } from '../SdsFieldset/SdsDescription';
import { SdsFieldError } from '../SdsFieldset/SdsFieldError';

/**
 * Input Field
 */
@Component({
  tag: 'sds-input-field',
  styleUrl: 'SdsInput.scss',
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
  @State() inputValue = '';

  /**
   * Sets the default value for the input
   */
  @Prop() defaultValue = '';

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
  @Prop({ reflect: true }) type: Exclude<JSXBase.InputHTMLAttributes<HTMLInputElement>['type'], undefined> = '';

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
          <SdsLabel htmlFor="input" id="label">
            {this.label}
          </SdsLabel>
        )}
        <SdsInput
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
        {this.description && <SdsDescription id="description">{this.description}</SdsDescription>}
        {this.error && <SdsFieldError id="error">{this.error}</SdsFieldError>}
      </sds-field>
    );
  }
}
