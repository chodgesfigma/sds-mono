import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'sds-dialog-body',
  styleUrl: 'sds-dialog-body.scss',
  shadow: true,
})
export class SdsDialogBody {
  @Prop() bleed = false;

  render() {
    const classNames = clsx('dialog-body', this.bleed && 'dialog-body-bleed');
    return (
      <div class={classNames}>
        <slot></slot>
      </div>
    );
  }
}
