import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

type SdsLabelProps = JSXBase.LabelHTMLAttributes<HTMLLabelElement>;

export const SdsLabel: FunctionalComponent<SdsLabelProps> = (props, children) => {
  return (
    <label class="label" {...props}>
      {children}
    </label>
  );
};
