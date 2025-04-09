import { SlPopup } from '@shoelace-style/shoelace';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-menu-popover',
  styleUrl: 'sds-menu-popover.scss',
  shadow: true,
})
export class SdsMenuPopover {
  @Prop() isOpen = false;

  @Prop() placement: SlPopup['placement'] = 'bottom-start';

  render() {
    return (
      <sl-popup active={this.isOpen} placement={this.placement}>
        <slot></slot>
      </sl-popup>
    );
  }
}

// export type MenuPopoverProps = RACPopoverProps;
// export function MenuPopover({ ...props }: MenuPopoverProps) {
//   return <RACPopover {...props} />;
// }
