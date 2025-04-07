import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'sds-dialog-close',
  styleUrl: 'sds-dialog-close.scss',
  shadow: true,
})
export class SdsDialogClose {
  /**
   * Emitted when the close-button is clicked
   */
  @Event({
    eventName: 'sds-close-dialog',
  })
  closeDialog!: EventEmitter<undefined>;

  handleClick = () => {
    this.closeDialog.emit();
  };

  render() {
    return (
      <sds-button rounded onClick={this.handleClick} class="dialog-close" aria-label="Dismiss dialog" variant="subtle" size="small">
        <sds-icon-x />
      </sds-button>
    );
  }
}
