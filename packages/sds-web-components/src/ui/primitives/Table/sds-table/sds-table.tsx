import { Component, Host, Prop, h } from '@stencil/core';
import clsx from 'clsx';

export type TableAlignment = 'start' | 'end' | 'center';

/**
 * This is a simple table wrapper, that applies styles to any tables within
 */
@Component({
  tag: 'sds-table',
  styleUrl: 'sds-table.scss',
  shadow: false,
})
export class SdsTable {
  /**
   * Removes radius and left/right border width
   */
  @Prop() bleed = false;

  /**
   * Reduces spacing between cells
   */
  @Prop() dense = false;

  /**
   * Applies horizontal lines between cells
   */
  @Prop() grid = false;

  /**
   * Applies alternating backgrounds for rows
   */
  @Prop() striped = false;

  /**
   * Adds background color changing on hover (only visible in conjunction with striped)
   */
  @Prop() interactive = false;

  /**
   * Sets the text alignment of the table
   */
  @Prop() alignment: TableAlignment = 'start';

  render() {
    const classNames = clsx(
      'table',
      this.bleed && 'table-bleed',
      this.dense && 'table-dense',
      this.grid && 'table-grid',
      this.striped && 'table-striped',
      this.interactive && 'table-interactive',
      `table-align-${this.alignment}`,
    );
    return (
      <Host class={classNames}>
        <slot></slot>
      </Host>
    );
  }
}
