import '@shoelace-style/shoelace/dist/components/popup/popup.js';
import SlPopup from '@shoelace-style/shoelace/dist/components/popup/popup.js';
import { Component, h, Method, Prop } from '@stencil/core';

/**
 * Tooltip
 * @slot anchor - slot for the element that, when clicked, will toggle the tooltip
 * @slot - slot for the dialog content
 */
@Component({
  tag: 'sds-tooltip',
  styleUrl: 'sds-tooltip.scss',
  shadow: true,
})
export class SdsTooltip {
  /**
   * Controls if the tooltip is visible or not
   */
  @Prop({ mutable: true }) isActive = false;

  /**
   * Placement for where the tooltip appears in relation to the anchor
   */
  @Prop() placement: SlPopup['placement'] = 'bottom';

  /**
   * Distance of the tooltip from the anchor
   */
  @Prop() offset = 16;

  /**
   * Will programmatically toggle the visibility of the tooltip
   */
  @Method()
  async toggleTooltip() {
    this.isActive = !this.isActive;
  }

  render() {
    return (
      <sl-popup distance={this.offset} active={this.isActive} arrow class="tooltip" placement={this.placement} data-placement={this.placement}>
        <span slot="anchor" onClick={() => this.toggleTooltip()}>
          <slot name="anchor" />
        </span>
        <sds-dialog class="dialog">
          <slot />
        </sds-dialog>
      </sl-popup>
    );
  }
}
