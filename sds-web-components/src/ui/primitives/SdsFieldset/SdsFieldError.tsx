import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

type SdsFieldErrorProps = JSXBase.HTMLAttributes<HTMLSpanElement>;

/**
 * Fieldset Field Error
 * @return styled `span` element
 */
export const SdsFieldError: FunctionalComponent<SdsFieldErrorProps> = (props, children) => {
  return (
    <span class="error-message" {...props}>
      {children}
    </span>
  );
};
