import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

interface SdsFormProps extends JSXBase.FormHTMLAttributes<HTMLFormElement> {
  singleLine?: boolean;
}

export const SdsForm: FunctionalComponent<SdsFormProps> = ({ singleLine, ...props }, children) => {
  const classNames = clsx('form', singleLine && 'form-single-line');
  return (
    <form class={classNames} {...props}>
      {children}
    </form>
  );
};
