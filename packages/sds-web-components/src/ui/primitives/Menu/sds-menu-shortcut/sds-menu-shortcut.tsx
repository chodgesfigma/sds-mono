import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sds-menu-shortcut',
  styleUrl: 'sds-menu-shortcut.scss',
  shadow: true,
})
export class SdsMenuShortcut {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

// export type MenuShortcutProps = KeyboardProps;
// export function MenuShortcut({
//   children,
//   className,
//   ...props
// }: MenuShortcutProps) {
//   const classNames = clsx(className, "menu-shortcut");
//   return (
//     <Keyboard {...props} className={classNames}>
//       {children}
//     </Keyboard>
//   );
// }
