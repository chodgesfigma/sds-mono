import { SlMenuItem } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import { Component, Host, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'sds-list-box-item',
  styleUrl: 'sds-list-box-item.scss',
  shadow: false,
})
export class SdsListBoxItem {
  /**
   * Unique value for item
   */
  @Prop()
  value: SlMenuItem['value'] = '';

  /**
   * Render checkbox or normal item
   */
  @Prop()
  type: SlMenuItem['type'] = 'normal';

  /**
   * Render checkbox or normal item
   */
  @Prop()
  checked: SlMenuItem['checked'] = false;

  /**
   * Display loading state
   */
  @Prop()
  loading: SlMenuItem['loading'] = false;

  /**
   * Disable option
   */
  @Prop()
  disabled: SlMenuItem['disabled'] = false;

  @State()
  selected: boolean = false;

  @Method()
  async deselect() {
    this.selected = false;
  }

  render() {
    return (
      <Host>
        <sl-menu-item
          value={this.value}
          type={this.type}
          checked={this.checked}
          loading={this.loading}
          disabled={this.disabled}
          tabindex="0"
          onClick={() => (this.selected = !this.selected)}
          data-selected={this.selected.toString()}
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div class="list-box-item">
            <slot></slot>
            <slot name="label"></slot>
            <slot name="image"></slot>
            <slot name="description"></slot>
          </div>
        </sl-menu-item>
      </Host>
    );
  }
}
