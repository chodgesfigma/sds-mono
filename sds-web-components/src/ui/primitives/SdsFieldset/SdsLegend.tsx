import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

type SdsLegendProps = JSXBase.HTMLAttributes<HTMLLegendElement>;

export const SdsLegend: FunctionalComponent<SdsLegendProps> = (props, children) => {
  return (
    <legend class="legend" {...props}>
      {children}
    </legend>
  );
};
