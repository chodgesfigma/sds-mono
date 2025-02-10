import { Component, Prop, h } from '@stencil/core';
// import { JSXBase } from '@stencil/core/internal';
import clsx from 'clsx';

// type LinkProps = JSXBase.AnchorHTMLAttributes<HTMLAnchorElement>;

type Target = '_blank' | '_self' | 'parent' | '_top';

@Component({
  tag: 'sds-link',
  styleUrl: 'SdsLink.scss',
  shadow: true,
})
export class SdsLink {
  /**
   * Href of the link
   */
  @Prop() href?: string;

  /**
   * Additional CSS classes
   */
  @Prop() class?: string;

  /**
   * Target of the link
   */
  @Prop() target?: Target;

  /**
   * Rel HTML attribute
   */
  @Prop() rel?: string;

  /**
   * Ping HTML attribute
   */
  @Prop() ping?: string;

  /**
   * Media HTML attribute
   */
  @Prop() media?: string;

  /**
   * HrefLang HTML attribute to specify the language of the linked document
   */
  @Prop() hreflang?: string;

  /**
   * Download HTML attribute
   */
  @Prop() download?: string;

  render() {
    const classNames = clsx('link', this.class);
    return (
      <a class={classNames} download={this.download} href={this.href} rel={this.rel} target={this.target} ping={this.ping} media={this.media} hreflang={this.hreflang}>
        <slot />
      </a>
    );
  }
}
