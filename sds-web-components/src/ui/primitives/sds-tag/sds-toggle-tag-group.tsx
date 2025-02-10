import { Component, h } from '@stencil/core';
import clsx from 'clsx';

/**
 * Toggle Tag Group
 * @slot label - slot for the group's label
 */
@Component({
  tag: 'sds-toggle-tag-group',
  styleUrl: 'sds-tag.scss',
  shadow: true,
})
export class SdsToggleTagGroup {
  render() {
    const classNames = clsx('tag-toggle-group');
    return (
      <div class={classNames}>
        <span class="label" id="list-label">
          <slot name="label" />
        </span>
        <div id="list" aria-labelledby="list-label">
          <slot />
        </div>
      </div>
    );
  }
}
