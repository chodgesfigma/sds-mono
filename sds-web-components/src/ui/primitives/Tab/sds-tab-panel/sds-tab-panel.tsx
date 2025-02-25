import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sds-tab-panel',
  styleUrl: 'sds-tab-panel.scss',
  shadow: true,
})
export class SdsTabPanel {
  /**
   * Unique ID for tab
   */
  @Prop()
  panelId: string = '';

  /**
   * Flag if tab panel is active/inactive
   */
  @Prop({
    reflect: true,
  })
  active: boolean = false;

  render() {
    return (
      <Host>
        <sl-tab-panel class="tab-panel" name={this.panelId} active={this.active}>
          <slot></slot>
        </sl-tab-panel>
      </Host>
    );
  }
}
