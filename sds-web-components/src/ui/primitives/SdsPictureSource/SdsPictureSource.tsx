import { FunctionalComponent, h } from '@stencil/core';

export interface SdsPictureSourceProps {
  /**
   * The srcSet HTML attribute
   */
  srcSet: string;

  /**
   * The media query condition for this source
   */
  media?: string;
}

export const SdsPictureSource: FunctionalComponent<SdsPictureSourceProps> = ({ srcSet, media }) => {
  return <source srcSet={srcSet} media={media} />;
};
