import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

export type SdsCheckboxProps = JSXBase.InputHTMLAttributes<HTMLInputElement> & {
  type?: never;
  indeterminate: boolean;
};

/**
 * Checkbox
 */
export const SdsCheckboxFunctional: FunctionalComponent<SdsCheckboxProps> = ({ onClick, indeterminate = false, ...props }) => {
  const className = clsx('checkbox', props.class);
  return (
    <div onClick={onClick} class={className} data-indeterminate={indeterminate}>
      <sds-icon-minus aria-hidden="true" class="icon icon-indeterminate"></sds-icon-minus>
      <sds-icon-check aria-hidden="true" class="icon icon-selected"></sds-icon-check>
      <input class="input" {...props} type="checkbox" />
    </div>
  );
};
