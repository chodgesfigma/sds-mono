import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

export type SdsInputProps = JSXBase.SelectHTMLAttributes<HTMLSelectElement>;

/**
 * Select
 */
export const SdsSelectFunctional: FunctionalComponent<SdsInputProps> = (props, children) => {
  const className = clsx('select-wrapper', props.class);
  return (
    <span class={className}>
      <sds-icon-chevron-down class="icon" />
      <select {...props} class="select">
        {children}
      </select>
    </span>
  );
};
