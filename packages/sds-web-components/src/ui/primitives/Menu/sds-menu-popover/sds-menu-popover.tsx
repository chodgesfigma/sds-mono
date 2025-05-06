import { SlPopup } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/popup/popup.js';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-menu-popover',
  styleUrl: 'sds-menu-popover.scss',
  shadow: true,
})
export class SdsMenuPopover {
  slPopoverRef!: SlPopup;

  /**
   * Controls if the popover is open or not
   */
  @Prop() isOpen = false;

  /**
   * Placement for the popover
   */
  @Prop() placement: SlPopup['placement'] = 'bottom-start';

  render() {
    return (
      <Host>
        <sl-popup active={this.isOpen} placement={this.placement} distance="8" ref={(el: SlPopup) => (this.slPopoverRef = el)}>
          <span slot="anchor">
            <slot name="anchor" />
          </span>
          <slot></slot>
        </sl-popup>
      </Host>
    );
  }
}
