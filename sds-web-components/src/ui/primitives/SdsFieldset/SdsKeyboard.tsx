import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-keyboard',
  styleUrl: 'SdsFieldset.scss',
  shadow: true,
})
export class SdsKeyboard {
  render() {
    // const items = typeof children === "string"
    //   ? children.split("").map((k) => <kbd key={k}>{k}</kbd>)
    //   : children;

    return (
      <div class="keyboard">
        <slot />
      </div>
    );
  }
}
