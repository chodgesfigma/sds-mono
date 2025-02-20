import { SdsDescriptionFunctional } from '../../fieldset/sds-description/sds-description-functional';
import { SdsFieldErrorFunctional } from '../../fieldset/sds-field-error/sds-field-error-functional';
import { SdsLabelFunctional } from '../../fieldset/sds-label/sds-label-functional';
import { SdsSelectItemFunctional } from '../sds-select-item/sds-select-item-functional';
import { SdsSelectFunctional } from '../sds-select/sds-select-functional';
import { Component, h, Prop, Element, State } from '@stencil/core';
import clsx from 'clsx';

/**
 * Select Field
 */
@Component({
  tag: 'sds-select-field',
  styleUrl: 'sds-select-field.scss',
  shadow: true,
})
export class SdsSelectField {
  selectElement!: HTMLSelectElement;
  @Element() el!: HTMLElement;

  /**
   * Keeps track of whether or not the placeholder is currently selected
   */
  @State() hasSelectedPlaceholder = true;

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

  // bring <option>s directly into this <select>
  // this way the select can properly see and handle using the options
  componentDidLoad = () => {
    const options = this.el.querySelectorAll('sds-select-item');
    options.forEach(node => {
      const option = node.shadowRoot?.querySelector('option');
      if (option) {
        this.selectElement.append(option);

        // if there's a selected option, and it isn't the placeholder, remove the placeholder styling
        if (option.selected && option.dataset.placeholder !== 'true') {
          this.hasSelectedPlaceholder = false;
        }
      }
    });
  };

  /**
   * Remove the placeholder styling when an option is chosen
   */
  handleOnChange = () => {
    this.hasSelectedPlaceholder = false;
  };

  render() {
    const wrapperClassName = clsx(this.hasSelectedPlaceholder && 'select-wrapper--default');
    return (
      <sds-field disabled={this.disabled}>
        {this.label && (
          <SdsLabelFunctional htmlFor="input" id="label">
            {this.label}
          </SdsLabelFunctional>
        )}
        <SdsSelectFunctional
          id="input"
          ref={el => (this.selectElement = el as HTMLSelectElement)}
          disabled={this.disabled}
          aria-describedby={`description${this.error ? ' error' : ''}`}
          aria-labelledby="label"
          class={wrapperClassName}
          onChange={this.handleOnChange}
        >
          {this.placeholder && (
            <SdsSelectItemFunctional value="" disabled selected data-placeholder="true">
              {this.placeholder}
            </SdsSelectItemFunctional>
          )}
          <slot />
        </SdsSelectFunctional>
        {this.description && <SdsDescriptionFunctional id="description">{this.description}</SdsDescriptionFunctional>}
        {this.error && <SdsFieldErrorFunctional id="error">{this.error}</SdsFieldErrorFunctional>}
      </sds-field>
    );
  }
}
