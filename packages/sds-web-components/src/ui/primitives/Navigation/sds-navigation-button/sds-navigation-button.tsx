import { Component, Host, h, Prop, Event, Listen, EventEmitter } from '@stencil/core';
import { AnchorOrButton, AnchorOrButtonProps } from 'src/ui/utils';

@Component({
  tag: 'sds-navigation-button',
  styleUrl: 'sds-navigation-button.scss',
  shadow: true,
})
export class SdsNavigationButton {
  /**
   * Denotes if the button is selected
   */
  @Prop({ reflect: true })
  isSelected: boolean = false;

  /**
   * Font size of the button
   */
  @Prop()
  size: 'small' | 'medium' = 'small';

  /**
   * Flex direction of the content
   */
  @Prop()
  direction: 'column' | 'row' = 'column';

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
        <AnchorOrButton
          data-selected={this.isSelected || undefined}
          class={`navigation-button navigation-button-direction-${this.direction} navigation-button-size-${this.size}`}
          {...this.options}
        >
          <slot name="icon"></slot>
          <slot></slot>
        </AnchorOrButton>
      </Host>
    );
  }
}
