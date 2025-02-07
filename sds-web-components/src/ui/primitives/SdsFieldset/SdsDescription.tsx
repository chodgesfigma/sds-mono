import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

interface SdsDescriptionProps extends JSXBase.HTMLAttributes<HTMLElement> {
  elementType?: string;
}

export const SdsDescription: FunctionalComponent<SdsDescriptionProps> = (props, children) => {
  return (
    <span class="description" {...props}>
      {children}
    </span>
  );
};
