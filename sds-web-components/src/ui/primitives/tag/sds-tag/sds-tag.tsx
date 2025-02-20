import { Scheme, Variant } from './types';
import { Component, h, Event, EventEmitter } from '@stencil/core';
import { Prop } from '@stencil/core/internal';
import clsx from 'clsx';

@Component({
  tag: 'sds-tag',
  styleUrl: 'sds-tag.scss',
  shadow: true,
})
export class SdsTag {
  /**
   * Color scheme for the tag
   */
  @Prop() scheme: Scheme = 'brand';

  /**
   * Sets which set of colors to use in the scheme
   */
  @Prop() variant: Variant = 'primary';

  // this prop was added here, as Stencil doesn't have a way to dynamically
  // render something if an Event is being used within it's parent
  /**
   * Show or hide the x button
   */
  @Prop() removable = false;

  /**
   * Fires when the `x` icon button is clicked
   */
  @Event() removed!: EventEmitter<null>;

  handleTagRemoved = () => {
    this.removed.emit();
  };

  render() {
    const classNames = clsx('tag', `tag-scheme-${this.scheme}`, `tag-variant-${this.variant}`);
    return (
      <span class={classNames}>
        <slot />
        {this.removable && (
          <button class="tag-remove-button" onClick={this.handleTagRemoved}>
            <sds-icon-x class="icon" size="16" />
          </button>
        )}
      </span>
    );
  }
}
