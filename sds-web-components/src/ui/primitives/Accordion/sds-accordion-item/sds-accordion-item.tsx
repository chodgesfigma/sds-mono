import { SlDetails, SlHideEvent, SlShowEvent } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import { Component, Host, h, Prop, Event, EventEmitter, Listen, Method, Element } from '@stencil/core';

@Component({
  tag: 'sds-accordion-item',
  styleUrl: 'sds-accordion-item.scss',
  shadow: true,
})
export class SdsAccordionItem {
  @Element() el!: SdsAccordionItem;

  slDetailsRef!: SlDetails;

  /**
   * Title text that appears in the summary/button
   */
  @Prop()
  summary: string = '';

  /**
   * Emitted when the accordion is expanded
   */
  @Event({
    eventName: 'sds-accordion-item-expanded',
  })
  show!: EventEmitter<SlShowEvent>;

  /**
   * Emitted when the accordion is collapsed
   */
  @Event({
    eventName: 'sds-accordion-item-collapsed',
  })
  hide!: EventEmitter<SlHideEvent>;

  @Listen('sl-show')
  handleSlShow(event: SlShowEvent) {
    this.show.emit(event);
  }

  @Listen('sl-hide')
  handleSlHide(event: SlShowEvent) {
    this.hide.emit(event);
  }

  @Method()
  async collapseAccordion() {
    this.slDetailsRef.hide();
  }

  render() {
    return (
      <Host>
        <sl-details class="accordion-item" summary={this.summary} ref={(el: SlDetails) => (this.slDetailsRef = el)}>
          <slot></slot>
        </sl-details>
      </Host>
    );
  }
}
