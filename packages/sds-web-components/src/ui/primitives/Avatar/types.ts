export type AvatarSize = 'small' | 'medium' | 'large';
export type SharedAvatarProps = {
  src: string;
  square: boolean;
  initials: string;
  alt: string;
  size: AvatarSize;
};
