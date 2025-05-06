import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

export type SdsSwitchFunctional = JSXBase.InputHTMLAttributes<HTMLInputElement> & {
  type?: never;
};

/**
 * Switch
 */
export const SdsSwitchFunctional: FunctionalComponent<SdsSwitchFunctional> = ({ class: className, ...props }) => {
  const classNames = clsx('switch', className);
  return (
    <span class={classNames}>
      <input {...props} type="checkbox" class="input"></input>
      <span aria-hidden="true" class="switch-icon" />
    </span>
  );
};
