import { Target } from '../../sds-link/sds-link';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-text-link',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextLink {
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
    return (
      <sds-link variant="text-body-link" download={this.download} href={this.href} rel={this.rel} target={this.target} ping={this.ping} media={this.media} hreflang={this.hreflang}>
        <slot />
      </sds-link>
    );
  }
}
