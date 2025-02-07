import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

type SdsInputProps = JSXBase.InputHTMLAttributes<HTMLInputElement>;

export const SdsInput: FunctionalComponent<SdsInputProps> = props => {
  const className = clsx('input', props.class);
  return <input {...props} class={className} />;
};
