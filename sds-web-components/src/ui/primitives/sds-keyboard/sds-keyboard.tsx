import { Component, h, Element, State, VNode } from '@stencil/core';

/**
 * Fieldset Keyboard
 * @return `kbd` elements
 */
@Component({
  tag: 'sds-keyboard',
  shadow: true,
})
export class SdsKeyboard {
  @Element() host!: HTMLElement;
  /**
   * The parsed innerHTML, that's been split into further <kbd> elements
   */
  @State() childrenData?: VNode[];

  componentDidLoad() {
    const slotted = this.host.innerHTML;
    const splitContent = slotted.split('');
    if (splitContent.length > 0) {
      this.childrenData = [];
      this.childrenData = splitContent.map(char => <kbd key={char}>{char}</kbd>);
    }
  }

  render() {
    return <kbd class="keyboard">{this.childrenData ? this.childrenData : <slot />}</kbd>;
  }
}
