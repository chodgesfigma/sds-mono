import { Component, Prop, State, h } from '@stencil/core';
import clsx from 'clsx';

export type ImageAspectRatio = '1-1' | '16-9' | '4-3' | 'fill' | 'natural';
export type ImageSize = 'small' | 'medium' | 'large' | 'fill' | 'natural';
export type ImageVariant = 'default' | 'rounded';
type crossorigin = 'anonymous' | 'use-credentials' | '' | undefined;

@Component({
  tag: 'sds-image',
  styleUrl: 'sds-image.scss',
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
  @Prop() aspectRatio: ImageAspectRatio = 'natural';

  /**
   * Size
   */
  @Prop() size: ImageSize = 'natural';

  /**
   * The variant
   */
  @Prop() variant: ImageVariant = 'rounded';

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
  @Prop() loading: 'eager' | 'lazy' | undefined = 'eager';

  /**
   * Decoding html attribute
   */
  @Prop() decoding: 'async' | 'auto' | 'sync' | undefined = 'auto';

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
