import { Component, h } from '@stencil/core';

/**
 * Toggle Tag Group
 * @slot label - slot for the group's label
 */
@Component({
  tag: 'sds-toggle-tag-group',
  styleUrl: 'sds-toggle-tag.scss',
  shadow: true,
})
export class SdsToggleTagGroup {
  render() {
    return (
      <div class="tag-toggle-group">
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
