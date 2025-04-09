import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-menu',
  styleUrl: 'sds-menu.scss',
  shadow: true,
})
export class SdsMenu {
  render() {
    return (
      <div class="menu" role="menu">
        <slot />
      </div>
    );
  }
}

// export type MenuProps<T> = RACMenuProps<T>;
// export function Menu<T extends object>({ className, ...props }: MenuProps<T>) {
//   return <RACMenu className={clsx(className, "menu")} {...props} />;
// }
