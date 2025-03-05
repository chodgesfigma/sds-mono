import { Component, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { AnchorOrButton, AnchorOrButtonProps } from 'src/ui/utils';

@Component({
  tag: 'sds-navigation-pill',
  styleUrl: 'sds-navigation-pill.scss',
  shadow: true,
})
export class SdsNavigationPill {
  /**
   * Denotes if the button is selected
   */
  @Prop({ reflect: true })
  isSelected: boolean = false;

  /**
   * The props of AnchorOrButton
   */
  @Prop() options?: AnchorOrButtonProps;

  /**
   * Event emitted when selected
   */
  @Event({
    eventName: 'sds-navigation-selected',
  })
  selected!: EventEmitter<MouseEvent>;

  @Listen('click')
  handleClick(click: MouseEvent) {
    this.selected.emit(click);
  }

  render() {
    return (
      <Host>
        <AnchorOrButton data-selected={this.isSelected || undefined} class="navigation-pill" {...this.options}>
          <slot></slot>
        </AnchorOrButton>
      </Host>
    );
  }
}
