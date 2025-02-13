import { SdsSelectItemFunctional } from '../sds-select-item/sds-select-item-functional';
import { SdsSelectFunctional } from './sds-select-functional';
import { Component, Element, h, Prop, State } from '@stencil/core';
import clsx from 'clsx';

/**
 * Select
 */
@Component({
  tag: 'sds-select',
  styleUrl: 'sds-select.scss',
  shadow: true,
})
export class SdsSelect {
  selectElement!: HTMLSelectElement;
  @Element() el!: HTMLElement;

  /**
   * Keeps track of whether or not the placeholder is currently selected
   */
  @State() hasSelectedPlaceholder = true;

  /**
   * Placeholder text for the input
   */
  @Prop() placeholder = '';

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
    const className = clsx(this.hasSelectedPlaceholder && 'select-wrapper--default');
    return (
      <SdsSelectFunctional class={className} disabled={this.disabled} ref={el => (this.selectElement = el as HTMLSelectElement)} onChange={this.handleOnChange}>
        {this.placeholder && (
          <SdsSelectItemFunctional value="" disabled selected data-placeholder="true">
            {this.placeholder}
          </SdsSelectItemFunctional>
        )}
        <slot />
      </SdsSelectFunctional>
    );
  }
}
