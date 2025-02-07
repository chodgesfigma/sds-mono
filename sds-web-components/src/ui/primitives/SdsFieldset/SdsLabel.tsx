import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

type SdsLabelProps = JSXBase.LabelHTMLAttributes<HTMLLabelElement>;

/**
 * Fieldset Label
 * @return `label` element
 */
export const SdsLabel: FunctionalComponent<SdsLabelProps> = (props, children) => {
  const className = clsx('label', props.class);
  return (
    <label {...props} class={className}>
      {children}
    </label>
  );
};
