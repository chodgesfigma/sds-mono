import { FunctionalComponent, h } from '@stencil/core';
import { clsx } from 'clsx';

// Button Base props
export type Type = 'submit' | 'reset' | 'button';
export type Size = 'small' | 'medium';
export type Variant = 'primary' | 'neutral' | 'subtle' | 'danger-primary' | 'danger-subtle';

export interface SdsButtonBaseProps {
  /**
   * The button type
   */
  type?: Type;
  /**
   * The button size
   */
  size?: Size;
  /**
   * The button variant
   */
  variant?: Variant;

  /**
   * Disables the button
   */
  disabled?: boolean;
}

export const SdsButtonBase: FunctionalComponent<SdsButtonBaseProps> = props => {
  const { type, size = 'medium', variant, disabled = false } = props;

  const classNames = clsx('button', `button-size-${size}`, `button-variant-${variant}`);

  return (
    <button disabled={disabled} class={classNames} type={type}>
      <slot />
    </button>
  );
};
