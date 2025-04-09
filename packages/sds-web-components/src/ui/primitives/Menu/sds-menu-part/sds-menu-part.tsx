import { Component, Prop, h } from '@stencil/core';

export type Part = 'header' | 'section' | 'heading' | 'separator' | 'label' | 'description';

@Component({
  tag: 'sds-menu-part',
  styleUrl: 'sds-menu-part.scss',
  shadow: true,
})
export class SdsMenuPart {
  /**
   * Type of Menu Part to use
   */
  @Prop() variant!: Part;

  render() {
    const className = `menu-${this.variant}`;
    switch (this.variant) {
      case 'separator':
      case 'section':
      case 'header':
        return (
          <div class={className}>
            <slot />
          </div>
        );
      case 'heading':
        return (
          <sds-text-heading class={className}>
            <slot />
          </sds-text-heading>
        );
      case 'label':
        return (
          <sds-label class={className}>
            <slot />
          </sds-label>
        );
      case 'description':
        return (
          <sds-description class={className}>
            <slot />
          </sds-description>
        );
    }
  }
}

/*

export type MenuSeparatorProps = RACSeparatorProps;
export function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
  const classNames = clsx(className, "menu-separator");
  return <RACSeparator {...props} className={classNames} />;
}

*/
