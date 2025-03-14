import { SdsListBoxItem } from '../sds-list-box-item/sds-list-box-item';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import { SlMenu, SlMenuItem, SlSelectEvent } from '@shoelace-style/shoelace/dist/shoelace';
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sds-list-box',
  styleUrl: 'sds-list-box.scss',
  shadow: true,
})
export class SdsListBox {
  /**
   * Alignment direction for options
   */
  @Prop()
  orientation: 'vertical' | 'horizontal' = 'vertical';

  /**
   * Layout for options
   */
  @Prop()
  layout: 'stack' | 'grid' = 'stack';

  menuRef!: SlMenu;

  slotRef!: HTMLSlotElement;

  /**
   * Emitted when an sds-list-box-item is selected
   */
  @Event({
    eventName: 'sds-select',
  })
  select!: EventEmitter<{ item: SlMenuItem }>;

  handleSelect(item: SlMenuItem) {
    this.select.emit({ item });

    const deselectOtherItems = () => {
      this.slotRef
        .assignedElements()
        ?.filter(element => {
          if (element.tagName.toLowerCase() === 'sds-list-box-item') {
            const selectedItemValue = item.value;
            return (element as unknown as SdsListBoxItem).value !== selectedItemValue;
          }
        })
        .forEach(listBoxItem => (listBoxItem as unknown as SdsListBoxItem).deselect());
    };
    deselectOtherItems();
  }
  componentDidLoad() {
    this.menuRef.addEventListener('sl-select', (event: SlSelectEvent) => {
      this.handleSelect(event.detail.item);
    });
  }

  render() {
    return (
      <Host data-orientation={this.orientation} data-layout={this.layout}>
        <sl-menu class="list-box" ref={(el: SlMenu) => (this.menuRef = el)}>
          <slot ref={e => (this.slotRef = e as HTMLSlotElement)}></slot>
        </sl-menu>
      </Host>
    );
  }
}
