import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-switch-group',
  styleUrl: 'sds-switch-group.scss',
  shadow: true,
})
export class SdsSwitchGroup {
  render() {
    return (
      <div class="switch-group">
        <slot />
      </div>
    );
  }
}
