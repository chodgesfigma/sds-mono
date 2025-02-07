import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

type SdsFieldErrorProps = JSXBase.HTMLAttributes<HTMLSpanElement>;

/**
 * Fieldset Field Error
 * @return styled `span` element
 */
export const SdsFieldError: FunctionalComponent<SdsFieldErrorProps> = (props, children) => {
  const className = clsx('error-message', props.class);
  return (
    <span {...props} class={className}>
      {children}
    </span>
  );
};
