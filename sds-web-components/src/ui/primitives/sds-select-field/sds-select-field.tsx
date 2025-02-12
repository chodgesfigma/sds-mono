import { SdsDescriptionFunctional } from '../sds-description/sds-description-functional';
import { SdsFieldErrorFunctional } from '../sds-field-error/sds-field-error-functional';
import { SdsLabelFunctional } from '../sds-label/sds-label-functional';
import { SdsSelectItemFunctional } from '../sds-select-item/sds-select-item-functional';
import { SdsSelectFunctional } from '../sds-select/sds-select-functional';
import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sds-select-field',
  styleUrl: 'sds-select-field.scss',
  shadow: true,
})
export class SdsSelectField {
  selectElement!: HTMLSelectElement;
  @Element() el!: HTMLElement;

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
    console.log(options);
    options.forEach(node => {
      const option = node.shadowRoot?.querySelector('option');
      if (option) {
        this.selectElement.append(option);
      }
    });
  };

  render() {
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
        >
          {this.placeholder && (
            <SdsSelectItemFunctional value="" disabled selected>
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
