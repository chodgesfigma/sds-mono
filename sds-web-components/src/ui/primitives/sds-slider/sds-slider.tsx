import '@shoelace-style/shoelace/dist/components/range/range.js';
import { SlRange } from '@shoelace-style/shoelace/dist/shoelace';
import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'sds-slider',
  styleUrl: 'sds-slider.scss',
  shadow: true,
})
export class SdsSlider {
  rangeInput!: SlRange;

  /**
   * The name of the slider
   */
  @Prop() name = '';

  /**
   * The current value of the input, is set to defaultValue on load
   */
  @State() value!: SlRange['value'];

  /**
   * Label for the slider input
   */
  @Prop() label = '';

  /**
   * Secondary description label below the input
   */
  @Prop() description = '';

  /**
   * Shows or Hides the current value
   */
  @Prop() showOutput = true;

  /**
   * Disables the input
   */
  @Prop() disabled = false;

  /**
   * Initial value for the slider
   */
  @Prop() defaultValue: SlRange['defaultValue'] = 0;

  /**
   * Emitted when the input value is changed
   */
  @Event({
    eventName: 'sds-change',
  })
  change!: EventEmitter<{ value: SlRange['value'] }>;

  /**
   * Emitted when input is detected
   */
  @Event({
    eventName: 'sds-input',
  })
  input!: EventEmitter<{ value: SlRange['value'] }>;

  componentDidLoad() {
    this.value = this.defaultValue;
  }

  handleChange = () => {
    const value = this.rangeInput.value;
    this.value = value;
    this.change.emit({ value });
  };

  handleInput = () => {
    const value = this.rangeInput.value;
    this.value = value;
    this.input.emit({ value });
  };

  render() {
    return (
      <sds-field disabled={this.disabled}>
        {this.showOutput && <span class="slider-output">{this.value}</span>}
        {this.label && <sds-label aria-hidden="true">{this.label}</sds-label>}
        <sl-range
          tooltip="none"
          value={this.defaultValue}
          disabled={this.disabled}
          class="slider-field"
          label={this.label}
          help-text={this.description}
          min="0"
          max="100"
          on-sl-input={this.handleInput}
          on-sl-change={this.handleChange}
          ref={(el: SlRange) => (this.rangeInput = el)}
          name={this.name}
        ></sl-range>
        {this.description && <sds-description aria-hidden="true">{this.description}</sds-description>}
      </sds-field>
    );
  }
}
