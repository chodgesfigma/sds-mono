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
  closeDialog!: EventEmitter;

  handleClick = () => {
    this.closeDialog.emit();
  };

  render() {
    return (
      <sds-icon-button onClick={this.handleClick} class="dialog-close" ariaLabel="Dismiss dialog" variant="subtle" size="small">
        <sds-icon-x />
      </sds-icon-button>
    );
  }
}
