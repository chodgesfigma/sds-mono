import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'sds-menu-item',
  styleUrl: 'sds-menu-item.scss',
  shadow: true,
})
export class SdsMenuItem {
  /**
   * Disables the menu-item
   */
  @Prop() isDisabled = false;

  /**
   * WIP: Marks this item as a submenu and prevents closing the parent menu when clicked
   * TODO: implement a clean way to do submenus
   */
  // @Prop() isSubMenu = false;

  /**
   * Emitted when the menu item is clicked
   */
  @Event({
    eventName: 'sds-clicked',
  })
  clicked!: EventEmitter;

  handleItemClicked = () => {
    this.clicked.emit();
  };

  render() {
    return (
      <button class="menu-item" disabled={this.isDisabled} role="menuitem" onClick={this.handleItemClicked}>
        <slot />
      </button>
    );
  }
}
