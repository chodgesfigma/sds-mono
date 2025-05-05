import figma from '@figma/code-connect';
import { AvatarGroupSpacing, SharedAvatarProps } from 'sds-web-components';

export const AVATAR_PROPS = {
  square: figma.enum('Shape', {
    Square: true,
  }),
  initials: figma.enum('Type', {
    Initial: figma.string('Initials'),
  }),
  size: figma.enum<SharedAvatarProps['size']>('Size', {
    Large: 'large',
    Small: 'small',
  }),
  src: figma.enum('Type', {
    Image: 'image.png',
  }),
};

export const AVATAR_GROUP_PROPS = {
  spacing: figma.enum<AvatarGroupSpacing>('Spacing', {
    Overlap: 'negative-200',
    Spaced: '100',
  }),
  children: figma.children('Avatar'),
};

export const AVATAR_BLOCK_PROPS = {
  avatarTitle: figma.string('Title'),
  description: figma.string('Description'),
  children: figma.children('Avatar'),
};
