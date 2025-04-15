import { SdsDescriptionFunctional } from '../../Fieldset/sds-description/sds-description-functional';
import { SdsLabelFunctional } from '../../Fieldset/sds-label/sds-label-functional';
import { SdsCheckboxFunctional } from '../sds-checkbox/sds-checkbox-functional';
import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-checkbox-field',
  styleUrl: 'sds-checkbox-field.scss',
  shadow: true,
})
export class SdsCheckboxField {
  @Element() el!: HTMLElement;

  /**
   * A reference to the checkbox field
   */
  checkboxInput!: HTMLInputElement;

  @State() labelText?: string;

  /**
   * Controls if the checkbox is checked or not
   */
  @Prop({ reflect: true }) selected = false;

  /**
   * Marks the checkbox as an in-between state
   */
  @Prop({ reflect: true }) indeterminate = false;

  /**
   * The checkbox label
   */
  @Prop({ mutable: true }) label = '';

  /**
   * A secondary label below the checkbox
   */
  @Prop() description = '';

  /**
   * An error message that appears below the checkbox
   */
  // @Prop() error = '';

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

  @Watch('selected')
  handleChange() {
    this.change.emit({ checked: this.selected, value: this.value });
  }

  handleInputChange = () => {
    this.selected = this.checkboxInput.checked;
  };

  handleClick = () => {
    if (this.disabled) {
      return;
    }

    this.selected = !this.selected;
  };

  componentWillLoad() {
    this.labelText = this.label || (this.el.innerHTML !== '' ? this.el.innerHTML : undefined);
  }

  render() {
    const classNames = clsx('checkbox-field', this.disabled && 'checkbox-field--disabled');
    return (
      <div class={classNames}>
        <SdsLabelFunctional htmlFor="checkbox" id="label">
          {this.labelText}
        </SdsLabelFunctional>
        <SdsCheckboxFunctional
          id="checkbox"
          aria-describedby="description"
          aria-labelledby="label"
          disabled={this.disabled}
          indeterminate={this.indeterminate}
          checked={this.selected}
          onChange={this.handleInputChange}
          ref={el => (this.checkboxInput = el as HTMLInputElement)}
          onClick={this.handleClick}
        />
        {this.description && <SdsDescriptionFunctional id="description">{this.description}</SdsDescriptionFunctional>}
        {/* Error field is present in base repo, but the styling isn't handled properly, opting to not render it */}
        {/* {this.error && <SdsFieldErrorFunctional id="error">{this.error}</SdsFieldErrorFunctional>} */}
        <slot data-hidden={`${this.el.innerHTML === this.labelText}`} />
      </div>
    );
  }
}
