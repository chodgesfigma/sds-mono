import { SdsSelectItemFunctional } from './sds-select-item-functional';
import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'sds-select-item',
  styleUrl: 'sds-select-item.scss',
  shadow: true,
})
export class SdsSelectItem {
  option!: HTMLOptionElement;
  @Element() el!: HTMLElement;
  /**
   * Marks this option as selected within the select
   */
  @Prop() selected = false;

  /**
   * Disables this option
   */
  @Prop() disabled = false;

  // Bring slot content directly into this <option>
  // this way, when the parent <select> appends this option, the content comes along with it
  componentDidLoad() {
    this.option.innerHTML = this.el.innerHTML;
  }

  render() {
    return (
      <SdsSelectItemFunctional disabled={this.disabled} selected={this.selected} ref={el => (this.option = el as HTMLOptionElement)}>
        <slot />
      </SdsSelectItemFunctional>
    );
  }
}
