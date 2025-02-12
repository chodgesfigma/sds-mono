import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

export type SdsInputProps = JSXBase.InputHTMLAttributes<HTMLInputElement>;

/**
 * Input
 */
export const SdsInputFunctional: FunctionalComponent<SdsInputProps> = props => {
  const className = clsx('input', props.class);
  return <input {...props} class={className} />;
};
