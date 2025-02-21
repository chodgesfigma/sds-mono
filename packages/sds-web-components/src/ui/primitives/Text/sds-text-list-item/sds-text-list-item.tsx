import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-text-list-item',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextListItem {
  render() {
    const classNames = `text-list-item`;
    return (
      <li class={classNames}>
        <slot />
      </li>
    );
  }
}
