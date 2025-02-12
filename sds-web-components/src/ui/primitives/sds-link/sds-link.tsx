import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

type Target = '_blank' | '_self' | 'parent' | '_top';

@Component({
  tag: 'sds-link',
  styleUrl: 'sds-link.scss',
  shadow: true,
})
export class SdsLink {
  /**
   * Href of the link
   */
  @Prop() href?: string;

  /**
   * Target of the link
   */
  @Prop() target: Target = '_self';

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
    const classNames = clsx('link');
    return (
      <a class={classNames} download={this.download} href={this.href} rel={this.rel} target={this.target} ping={this.ping} media={this.media} hreflang={this.hreflang}>
        <slot />
      </a>
    );
  }
}
