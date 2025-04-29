import { SlPopup } from '@shoelace-style/shoelace';
import { Component, Listen, Method, Prop, State, h } from '@stencil/core';
import { DefaultVariant } from 'src/components';

@Component({
  tag: 'sds-menu-button',
  styleUrl: 'sds-menu-button.scss',
  shadow: true,
})
export class SdsMenuButton {
  @State() isMenuOpen = false;

  /**
   * Label / Aria-label for the button
   */
  @Prop() label = '';

  /**
   * Label Button variant
   */
  @Prop() variant: DefaultVariant = 'primary';

  /**
   * Placement for where the menu appears in relation to the button
   */
  @Prop() placement: SlPopup['placement'] = 'bottom-start';

  /**
   * Disables the menu button
   */
  @Prop() isDisabled = false;

  @Listen('sds-close-menu')
  handleCloseMenu() {
    this.closeMenu();
  }

  @Listen('sds-clicked')
  handleMenuItemClicked() {
    this.closeMenu();
  }

  /**
   * Opens the Menu
   */
  @Method()
  async openMenu() {
    if (this.isDisabled) return;
    this.isMenuOpen = true;
  }

  /**
   * Closes the Menu
   */
  @Method()
  async closeMenu() {
    if (this.isDisabled) return;
    this.isMenuOpen = false;
  }

  /**
   * Toggles the menu open/closed
   */
  @Method()
  async toggleMenu() {
    if (this.isDisabled) return;
    this.isMenuOpen = !this.isMenuOpen;
  }

  render() {
    return (
      <sds-menu-trigger>
        <sds-menu-popover isOpen={this.isMenuOpen} placement={this.placement}>
          <sds-button disabled={this.isDisabled} slot="anchor" onClick={() => this.toggleMenu()} aria-label={this.label} class="menu-button" variant={this.variant}>
            <slot name="icon">{this.label}</slot>
          </sds-button>
          <sds-menu>
            <slot></slot>
          </sds-menu>
        </sds-menu-popover>
      </sds-menu-trigger>
    );
  }
}
