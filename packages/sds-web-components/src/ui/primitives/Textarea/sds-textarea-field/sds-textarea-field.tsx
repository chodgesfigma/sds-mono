import { SdsDescriptionFunctional } from '../../Fieldset/sds-description/sds-description-functional';
import { SdsFieldErrorFunctional } from '../../Fieldset/sds-field-error/sds-field-error-functional';
import { SdsLabelFunctional } from '../../Fieldset/sds-label/sds-label-functional';
import { SdsTextareaFunctional, SdsTextareaProps } from '../sds-textarea/sds-textarea-functional';
import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sds-textarea-field',
  styleUrl: 'sds-textarea-field.scss',
  shadow: true,
})
export class SdsTextareaField {
  /**
   * A reference to the textarea field
   */
  textarea!: HTMLTextAreaElement;

  /**
   * The textarea label
   */
  @Prop() label = '';

  /**
   * A secondary label below the textarea
   */
  @Prop() description = '';

  /**
   * Disables the textarea
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Placeholder text for the textarea
   */
  @Prop() placeholder = '';

  /**
   * Value for the textarea
   */
  @Prop({ reflect: true }) value: SdsTextareaProps['value'];

  /**
   * Marks the textarea as required
   */
  @Prop({ reflect: true }) required = false;

  /**
   * An error message that appears below the textarea
   */
  @Prop() error = '';

  /**
   * Allows the textarea to be resized
   */
  @Prop() resizable = true;

  /**
   * Emitted when the textarea's value is changed
   */
  @Event({
    eventName: 'sds-change',
  })
  change!: EventEmitter<{ value: string }>;

  /**
   * Emitted when the textarea's has input
   */
  @Event({
    eventName: 'sds-input',
  })
  input!: EventEmitter<{ value: string }>;

  handleChange = () => {
    this.change.emit({ value: this.textarea.value });
  };

  handleInput = () => {
    this.input.emit({ value: this.textarea.value });
  };

  render() {
    return (
      <sds-field disabled={this.disabled}>
        {this.label && (
          <SdsLabelFunctional htmlFor="textarea" id="label">
            {this.label}
          </SdsLabelFunctional>
        )}
        <SdsTextareaFunctional
          ref={el => (this.textarea = el as HTMLTextAreaElement)}
          onChange={this.handleChange}
          onInput={this.handleInput}
          resizable={this.resizable}
          required={this.required}
          disabled={this.disabled}
          placeholder={this.placeholder}
          value={this.value}
          id="textarea"
          aria-describedby={`description${this.error ? ' error' : ''}`}
          aria-labelledby="label"
        />
        {this.description && <SdsDescriptionFunctional id="description">{this.description}</SdsDescriptionFunctional>}
        {this.error && <SdsFieldErrorFunctional id="error">{this.error}</SdsFieldErrorFunctional>}
      </sds-field>
    );
  }
}
