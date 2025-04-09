import { Component, Listen, Method, Prop, State, h } from '@stencil/core';
import { DefaultVariant } from 'src/components';

@Component({
  tag: 'sds-menu-button',
  styleUrl: 'sds-menu-button.scss',
  shadow: true,
})
export class SdsMenuButton {
  @State() isMenuOpen = false;

  /**
   * Label / Aria-label for the button
   */
  @Prop() label = '';

  /**
   * Label Button variant
   */
  @Prop() variant: DefaultVariant = 'primary';

  @Listen('sds-close-menu')
  handleCloseMenu() {
    this.closeMenu();
  }

  /**
   * Opens the Menu
   */
  @Method()
  async openMenu() {
    this.isMenuOpen = true;
  }

  /**
   * Closes the Menu
   */
  @Method()
  async closeMenu() {
    this.isMenuOpen = false;
  }

  render() {
    return (
      <sds-menu-trigger>
        <sds-button onClick={() => this.openMenu()} aria-label={this.label} class="icon-button">
          <slot name="icon">{this.label}</slot>
        </sds-button>
        <sds-menu-popover isOpen={this.isMenuOpen}>
          <sds-dialog>
            <slot></slot>
          </sds-dialog>
        </sds-menu-popover>
      </sds-menu-trigger>
    );
  }
}

// export interface MenuButtonProps<T>
//   extends RACMenuProps<T>,
//     Omit<RACMenuTriggerProps, "children"> {
//   label: string;
//   variant?: ButtonProps["variant"];
//   placement?: MenuPopoverProps["placement"];
//   icon?: React.ReactNode;
// }
// export function MenuButton<T extends object>({
//   label,
//   children,
//   icon,
//   placement,
//   variant,
//   ...props
// }: MenuButtonProps<T>) {
//   return (
//     <MenuTrigger>
//       {icon ? (
//         <IconButton variant={variant} aria-label={label}>
//           {icon}
//         </IconButton>
//       ) : (
//         <Button variant={variant}>{label}</Button>
//       )}
//       <MenuPopover placement={placement}>
//         <Menu {...props}>{children}</Menu>
//       </MenuPopover>
//     </MenuTrigger>
//   );
// }
