import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

export interface SdsTextareaProps extends JSXBase.TextareaHTMLAttributes<HTMLTextAreaElement> {
  resizable?: boolean;
}

/**
 * Textarea
 */
export const SdsTextareaFunctional: FunctionalComponent<SdsTextareaProps> = ({ resizable = true, ...props }) => {
  const className = clsx('text-area', resizable && 'text-area-resizable');
  return <textarea {...props} class={className} />;
};
