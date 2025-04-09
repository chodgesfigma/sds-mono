import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sds-menu-item',
  styleUrl: 'sds-menu-item.scss',
  shadow: true,
})
export class SdsMenuItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

// export type MenuItemProps = RACMenuItemProps;
// export function MenuItem({ className, ...props }: MenuItemProps) {
//   const classNames = clsx(className, "menu-item");
//   const textValue =
//     props.textValue ||
//     (typeof props.children === "string" ? props.children : undefined);
//   return (
//     <RACMenuItem {...props} className={classNames} textValue={textValue}>
//       {({ hasSubmenu }) => (
//         <>
//           {props.children}
//           {hasSubmenu && <IconChevronDown />}
//         </>
//       )}
//     </RACMenuItem>
//   );
// }
