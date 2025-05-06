import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

export type DialogType = 'sheet' | 'card';

@Component({
  tag: 'sds-dialog',
  styleUrl: 'sds-dialog.scss',
  shadow: true,
})
export class SdsDialog {
  /**
   * Visual type of the dialog
   */
  @Prop() dialogType: DialogType = 'card';

  render() {
    const classNames = clsx('dialog', `dialog-type-${this.dialogType}`);

    return (
      <div class={classNames} role="dialog">
        <slot></slot>
      </div>
    );
  }
}
