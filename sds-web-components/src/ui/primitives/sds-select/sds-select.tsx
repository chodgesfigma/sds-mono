import { SdsSelectItemFunctional } from '../sds-select-item/sds-select-item-functional';
import { SdsSelectFunctional } from './sds-select-functional';
import { Component, Element, h, Prop } from '@stencil/core';

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
      }
    });
  };

  render() {
    return (
      <SdsSelectFunctional disabled={this.disabled} ref={el => (this.selectElement = el as HTMLSelectElement)}>
        {this.placeholder && (
          <SdsSelectItemFunctional value="" disabled selected>
            {this.placeholder}
          </SdsSelectItemFunctional>
        )}
        <slot />
      </SdsSelectFunctional>
    );
  }
}
