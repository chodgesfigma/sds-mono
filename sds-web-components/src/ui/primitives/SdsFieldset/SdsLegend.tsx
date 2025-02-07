import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

type SdsLegendProps = JSXBase.HTMLAttributes<HTMLLegendElement>;

/**
 * Fieldset Legend
 * @return `legend` element
 */
export const SdsLegend: FunctionalComponent<SdsLegendProps> = (props, children) => {
  const className = clsx('legend', props.class);
  return (
    <legend {...props} class={className}>
      {children}
    </legend>
  );
};
