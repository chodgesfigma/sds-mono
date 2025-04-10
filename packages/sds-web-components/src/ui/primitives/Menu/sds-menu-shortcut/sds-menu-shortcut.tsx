import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'sds-menu-shortcut',
  styleUrl: 'sds-menu-shortcut.scss',
  shadow: true,
})
export class SdsMenuShortcut {
  @Element() host!: HTMLElement;
  /**
   * The parsed innerHTML, that's been split into further <kbd> elements
   */
  @State() childrenData?: string[];

  componentDidLoad() {
    const slotted = this.host.innerHTML;
    const splitContent = slotted.split('');
    if (splitContent.length > 0) {
      this.childrenData = splitContent;
    }
  }

  render() {
    return this.childrenData ? <sds-keyboard class="menu-shortcut">{this.childrenData}</sds-keyboard> : <slot />;
  }
}
