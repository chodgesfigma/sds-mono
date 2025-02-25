import { SdsAccordionItem } from '../sds-accordion-item/sds-accordion-item';
import { SlShowEvent } from '@shoelace-style/shoelace';
import { Component, Host, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'sds-accordion',
  styleUrl: 'sds-accordion.scss',
  shadow: true,
})
export class SdsAccordion {
  slotRef!: HTMLSlotElement;

  /**
   * Allow multiple accordions to be opened at the same time
   */
  @Prop()
  multiple: boolean = true;

  @Listen('sds-accordion-item-expanded')
  handleShow(event: SlShowEvent) {
    if (!this.multiple) {
      this.slotRef
        .assignedElements()
        .filter(el => el.tagName?.toLowerCase() === 'sds-accordion-item')
        .forEach(element => {
          if (element !== event.target) {
            (element as unknown as SdsAccordionItem).collapseAccordion();
          }
        });
    }
  }
  render() {
    return (
      <Host>
        <slot ref={el => (this.slotRef = el as HTMLSlotElement)}></slot>
      </Host>
    );
  }
}
