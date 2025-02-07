import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

type SdsInputProps = JSXBase.InputHTMLAttributes<HTMLInputElement>;

export const SdsInput: FunctionalComponent<SdsInputProps> = props => {
  return <input class="input" {...props} />;
};
