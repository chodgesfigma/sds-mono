import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

type SdsFieldErrorProps = JSXBase.HTMLAttributes<HTMLSpanElement>;

export const SdsFieldError: FunctionalComponent<SdsFieldErrorProps> = (props, children) => {
  return (
    <span class="error-message" {...props}>
      {children}
    </span>
  );
};
