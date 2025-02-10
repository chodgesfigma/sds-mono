import { Component, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import clsx from 'clsx';

export type TagToggle = { id: string; selected: boolean };

/**
 * Toggle Tag
 * @slot icon - Slot for the start icon
 */
@Component({
  tag: 'sds-toggle-tag',
  styleUrl: 'sds-tag.scss',
  shadow: true,
})
export class SdsToggleTag {
  @Element() el!: HTMLButtonElement;
  /**
   * The selected state of the tag
   */
  @Prop({ reflect: true, mutable: true }) selected = false;

  /**
   * Allows the toggle to handle it's own state, without the use of a `<sds-toggle-tag-list>`
   */
  @Prop({ reflect: false, mutable: true }) allowSelfToggle = true;

  @Event() toggle!: EventEmitter<TagToggle>;

  handleOnClick = () => {
    const toggledSelected = !this.selected;
    this.toggle.emit({ id: this.el.id, selected: toggledSelected });
    if (this.allowSelfToggle) {
      this.selected = toggledSelected;
    }
  };

  render() {
    const classNames = clsx('tag', 'tag-toggle', this.selected && 'tag-toggle--selected');
    return (
      <button class={classNames} onClick={this.handleOnClick}>
        <slot name="icon" />
        <slot />
      </button>
    );
  }
}
