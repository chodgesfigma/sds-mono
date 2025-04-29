import { FunctionalComponent, h } from '@stencil/core';
import { clsx } from 'clsx';

// Button Base props
export type ButtonType = 'submit' | 'reset' | 'button';
export type ButtonSize = 'small' | 'medium';
export type ButtonVariant = 'primary' | 'neutral' | 'subtle' | 'danger-primary' | 'danger-subtle';

export interface SdsButtonBaseProps {
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

  /**
   * Disables the button
   */
  disabled?: boolean;

  /**
   * Visually rounds the button
   */
  rounded?: boolean;
}

export const SdsButtonBase: FunctionalComponent<SdsButtonBaseProps> = props => {
  const { type, size = 'medium', variant, disabled = false, rounded = false } = props;

  const classNames = clsx('button', `button-size-${size}`, `button-variant-${variant}`, rounded && `button-rounded`);

  return (
    <button disabled={disabled} class={classNames} type={type}>
      <slot />
    </button>
  );
};
