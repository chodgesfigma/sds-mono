import { SharedAvatarProps } from './types';
import { FunctionalComponent, h } from '@stencil/core';

type RenderInitialsAndImageProps = {
  initials: SharedAvatarProps['initials'];
  src: SharedAvatarProps['src'];
  alt: SharedAvatarProps['alt'];
};

export const RenderInitialsAndImage: FunctionalComponent<RenderInitialsAndImageProps> = ({ initials, src, alt }) => {
  return (
    <span>
      {initials && (
        <svg viewBox="0 0 100 100" aria-hidden={alt ? undefined : 'true'}>
          {alt && <title>{alt}</title>}
          <text x="50%" y="50%" alignment-baseline="middle" dominant-baseline="middle" text-anchor="middle" dy=".125em">
            {initials}
          </text>
        </svg>
      )}
      {src && <img src={src} alt={alt} />}
    </span>
  );
};
