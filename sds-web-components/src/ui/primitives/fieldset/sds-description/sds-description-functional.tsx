import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

interface SdsDescriptionProps extends JSXBase.HTMLAttributes<HTMLElement> {
  elementType?: string;
}

/**
 * Fieldset Description
 * @return styled `div` element
 */
export const SdsDescriptionFunctional: FunctionalComponent<SdsDescriptionProps> = (props, children) => {
  const className = clsx('description', props.class);
  return (
    <span {...props} class={className}>
      {children}
    </span>
  );
};
