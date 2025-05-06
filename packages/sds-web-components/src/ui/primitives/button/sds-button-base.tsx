import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { clsx } from 'clsx';

// Button Base props
export type ButtonType = 'submit' | 'reset' | 'button';
export type ButtonSize = 'small' | 'medium';
export type ButtonVariant = 'primary' | 'neutral' | 'subtle' | 'danger-primary' | 'danger-subtle';

export interface SdsButtonBaseProps extends JSXBase.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button type
   */
  type?: ButtonType;
  /**
   * The button size
   */
  size?: ButtonSize;
  /**
   * The button variant
   */
  variant?: ButtonVariant;
}

export const SdsButtonBase: FunctionalComponent<SdsButtonBaseProps> = ({ type, size = 'medium', variant, class: additionalClassNames, ...props }) => {
  const classNames = clsx(additionalClassNames, 'button', `button-size-${size}`, `button-variant-${variant}`);

  return (
    <button {...props} class={classNames} type={type}>
      <slot />
    </button>
  );
};
