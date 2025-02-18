import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

export type SdsSelectItemProps = JSXBase.OptionHTMLAttributes<HTMLOptionElement>;

/**
 * Select Option
 */
export const SdsSelectItemFunctional: FunctionalComponent<SdsSelectItemProps> = (props, children) => {
  const className = clsx('select-item', props.class);
  return (
    <option {...props} class={className}>
      {children}
    </option>
  );
};
