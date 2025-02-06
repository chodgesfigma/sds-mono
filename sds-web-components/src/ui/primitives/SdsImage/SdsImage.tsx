import { Component, Prop, State, h } from '@stencil/core';

export type AspectRatio = '1-1' | '16-9' | '4-3' | 'fill' | 'natural';
export type Size = 'small' | 'medium' | 'large' | 'fill' | 'natural';
export type Variant = 'default' | 'rounded';

@Component({
  tag: 'sds-image',
  styleUrl: 'SdsImage.scss',
  shadow: true,
})
export class SdsButton {
  /**
   * Alt description
   */
  @Prop() alt: string = '';

  /**
   * Aspect Ratio
   */
  @Prop() aspectRatio?: AspectRatio = 'natural';

  /**
   * Aspect Ratio
   */
  @Prop() size?: Size = 'natural';

  /**
   * The button default variant
   */
  @Prop() variant?: Variant = 'rounded';

  /**
   * Tracks whether the image has loaded or not
   */
  @State() loaded: boolean = false;

  private handleLoad = () => {
    this.loaded = true;
  };

  render() {
    return <image></image>;
  }
}
