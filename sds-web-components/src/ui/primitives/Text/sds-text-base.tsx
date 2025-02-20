import { FunctionalComponent, h } from '@stencil/core';

export type TextTag = 'p' | 'span' | 'strong' | 'small' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface SdsTextBaseProps {
  elementType?: TextTag;
  class?: string;
}

export const SdsTextBase: FunctionalComponent<SdsTextBaseProps> = ({ elementType = 'p', class: className }) => {
  const classNames = `${className || ''}`;

  switch (elementType) {
    case 'h1':
      return (
        <h1 class={classNames}>
          <slot />
        </h1>
      );
    case 'h2':
      return (
        <h2 class={classNames}>
          <slot />
        </h2>
      );
    case 'h3':
      return (
        <h3 class={classNames}>
          <slot />
        </h3>
      );
    case 'h4':
      return (
        <h4 class={classNames}>
          <slot />
        </h4>
      );
    case 'h5':
      return (
        <h5 class={classNames}>
          <slot />
        </h5>
      );
    case 'h6':
      return (
        <h6 class={classNames}>
          <slot />
        </h6>
      );
    case 'strong':
      return (
        <strong class={classNames}>
          <slot />
        </strong>
      );
    case 'small':
      return (
        <small class={classNames}>
          <slot />
        </small>
      );
    case 'span':
      return (
        <span class={classNames}>
          <slot />
        </span>
      );
    case 'p':
    default:
      return (
        <p class={classNames}>
          <slot />
        </p>
      );
  }
};
