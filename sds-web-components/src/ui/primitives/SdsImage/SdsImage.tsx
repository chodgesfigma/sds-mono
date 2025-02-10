import { Component, Prop, State, h } from '@stencil/core';
import clsx from 'clsx';

export type AspectRatio = '1-1' | '16-9' | '4-3' | 'fill' | 'natural';
export type Size = 'small' | 'medium' | 'large' | 'fill' | 'natural';
export type Variant = 'default' | 'rounded';
type crossorigin = 'anonymous' | 'use-credentials' | '' | undefined;

@Component({
  tag: 'sds-image',
  styleUrl: 'SdsImage.scss',
  shadow: true,
})
export class SdsImage {
  /**
   * Tracks whether the image has loaded or not
   */
  @State() loaded: boolean = false;

  /**
   * Alt description
   */
  @Prop() alt!: string;

  /**
   * Aspect Ratio
   */
  @Prop() aspectRatio?: AspectRatio = 'natural';

  /**
   * Size
   */
  @Prop() size?: Size = 'natural';

  /**
   * The variant
   */
  @Prop() variant?: Variant = 'rounded';

  /**
   * The src url
   */
  @Prop() src?: string;

  /**
   * Usemap html attribute
   */
  @Prop() usemap?: string | undefined;

  /**
   * SrcSet url html attribute
   */
  @Prop() srcset?: string | undefined;

  /**
   * Width html attribute
   */
  @Prop() width?: number | string | undefined;

  /**
   * Height html attribute
   */
  @Prop() height?: number | string | undefined;

  /**
   * Sizes html attribute
   */
  @Prop() sizes?: string | undefined;

  /**
   * Loading html attribute
   */
  @Prop() loading?: 'eager' | 'lazy' | undefined;

  /**
   * Decoding html attribute
   */
  @Prop() decoding?: 'async' | 'auto' | 'sync' | undefined;

  /**
   * Crossorigin html attribute
   */
  @Prop() crossorigin?: crossorigin;

  private handleLoad = () => {
    this.loaded = true;
  };

  render() {
    const classNames = clsx('image', `image-aspect-ratio-${this.aspectRatio}`, `image-size-${this.size}`, `image-variant-${this.variant}`, { 'image-loading': !this.loaded });

    return (
      <>
        {!this.loaded && <span class={clsx('image-placeholder', classNames)} />}
        <img
          class={classNames}
          src={this.src}
          srcset={this.srcset}
          sizes={this.sizes}
          width={this.width !== undefined ? String(this.width) : undefined}
          height={this.height !== undefined ? String(this.height) : undefined}
          alt={this.alt}
          usemap={this.usemap}
          loading={this.loading}
          decoding={this.decoding}
          crossorigin={this.crossorigin}
          onLoad={this.handleLoad}
        />
      </>
    );
  }
}
