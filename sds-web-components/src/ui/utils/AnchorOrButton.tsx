import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

type AnchorOrButtonSharedProps = {
  children?: React.ReactNode;
  href?: string;
};

type ButtonProps = JSXBase.ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = JSXBase.AnchorHTMLAttributes<HTMLAnchorElement>;

type AnchorOrButtonProps = (ButtonProps | LinkProps) & AnchorOrButtonSharedProps;

const isAnchor = (props: AnchorOrButtonProps): props is AnchorOrButtonSharedProps & LinkProps => {
  return 'href' in props;
};

/**
 * AnchorOrButton
 * @return `<a>` or `<button>` elements based on if there is an `href` in the props passed in
 */
export const AnchorOrButton: FunctionalComponent<AnchorOrButtonProps> = (props, children) => {
  if (isAnchor(props)) {
    const { style: _, ...sharedProps } = props;
    return <a {...sharedProps}>{children}</a>;
  } else {
    const { style: _, ...sharedProps } = props;
    return <button {...sharedProps}>{children}</button>;
  }
};
