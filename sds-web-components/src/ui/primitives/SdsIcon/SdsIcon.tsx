import { FunctionalComponent, h } from '@stencil/core';
import clsx from 'clsx';

export type Size = '14' | '16' | '20' | '24' | '32' | '40' | '48';

interface SdsIconProps {
  size?: Size;
}

// this uses a functional Stencil component, so that in execution, the <svg> and the Icon's <paths> (etc) are all part of the same jsx
// otherwise the browser doesn't seem to recognize the <path> attributes properly
// https://stenciljs.com/docs/functional-components
export const SdsIcon: FunctionalComponent<SdsIconProps> = ({ size = '16' }, children) => (
  <svg class={clsx('icon', `icon-size-${size}`)} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);
