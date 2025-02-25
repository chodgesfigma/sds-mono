import { SdsCheckboxFunctional } from './sds-checkbox-functional';
import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-checkbox',
  styleUrl: 'sds-checkbox.scss',
  shadow: true,
})
export class SdsCheckbox {
  /**
   * A reference to the checkbox field
   */
  checkboxInput!: HTMLInputElement;

  /**
   * Controls if the checkbox is checked or not
   */
  @Prop({ reflect: true }) selected = false;

  /**
   * Marks the checkbox as an in-between state
   */
  @Prop({ reflect: true }) indeterminate = false;

  /**
   * Disables the checkbox
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The value of the checkbox
   */
  @Prop() value = '';

  /**
   * Emitted when the checkbox is toggled
   */
  @Event({
    eventName: 'sds-change',
  })
  change!: EventEmitter<{ checked: boolean; value: string }>;

  handleChange = () => {
    const isChecked = this.checkboxInput.checked;
    this.selected = isChecked;
    this.change.emit({ checked: isChecked, value: this.value });
  };

  handleClick = () => {
    if (this.disabled) {
      return;
    }

    this.selected = !this.selected;
  };
  render() {
    return (
      <SdsCheckboxFunctional
        id="checkbox"
        disabled={this.disabled}
        indeterminate={this.indeterminate}
        checked={this.selected}
        onChange={this.handleChange}
        ref={el => (this.checkboxInput = el as HTMLInputElement)}
        onClick={this.handleClick}
      ></SdsCheckboxFunctional>
    );
  }
}
