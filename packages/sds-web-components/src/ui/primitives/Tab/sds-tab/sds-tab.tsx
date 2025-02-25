import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import SlTab from '@shoelace-style/shoelace/dist/components/tab/tab.js';
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sds-tab',
  styleUrl: 'sds-tab.scss',
  shadow: true,
})
export class SdsTab {
  tabRef!: SlTab;

  /**
   * Unique ID for tab
   */
  @Prop()
  panelId: string = '';

  /**
   * Flag if tab is active/inactive
   */
  @Prop({
    reflect: true,
  })
  active: boolean = false;

  /**
   * Event emitted when tab is clicked on
   */
  @Event({
    eventName: 'sds-tab-click',
  })
  click!: EventEmitter<{ panelId: string }>;

  handleClick() {
    this.click.emit({ panelId: this.panelId });
  }

  handleFocus() {
    this.tabRef.focus();
  }

  /**
   * Event emitted when using right arrow key to navigate
   */
  @Event({
    eventName: 'sds-tab-next',
  })
  next!: EventEmitter<{ panelId: string }>;

  /**
   * Event emitted when using left arrow key to navigate
   */
  @Event({
    eventName: 'sds-tab-previous',
  })
  previous!: EventEmitter<{ panelId: string }>;

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.next.emit({ panelId: this.panelId });
    } else if (event.key === 'ArrowLeft') {
      this.previous.emit({ panelId: this.panelId });
    }
  }

  focus() {
    this.tabRef.focus();
  }

  render() {
    return (
      <Host slot="nav" tabindex={this.active ? 0 : -1} onFocus={() => this.handleFocus()}>
        <sl-tab
          panel={this.panelId}
          active={this.active}
          onClick={() => this.handleClick()}
          class="tab"
          ref={(el: SlTab) => (this.tabRef = el)}
          onKeyDown={(e: KeyboardEvent) => this.handleKeyDown(e)}
        >
          <slot></slot>
        </sl-tab>
      </Host>
    );
  }
}
