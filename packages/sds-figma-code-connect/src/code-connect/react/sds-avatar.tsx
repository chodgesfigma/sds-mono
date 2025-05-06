import React from 'react';
import figma from '@figma/code-connect';
import {
  SdsAvatar,
  SdsAvatarBlock,
  SdsAvatarGroup,
} from 'sds-react-components';

import {
  AVATAR_PROPS,
  AVATAR_BLOCK_PROPS,
  AVATAR_GROUP_PROPS,
} from 'src/props/sds-avatar';

figma.connect(SdsAvatarGroup, '<FIGMA_AVATARS_AVATAR_GROUP>', {
  props: AVATAR_GROUP_PROPS,
  example: ({ children, ...props }) => (
    <SdsAvatarGroup {...props} max={3}>
      {children}
    </SdsAvatarGroup>
  ),
});
figma.connect(SdsAvatar, '<FIGMA_AVATARS_AVATAR>', {
  props: AVATAR_PROPS,
  example: ({ ...props }) => <SdsAvatar {...props} />,
});

figma.connect(SdsAvatarBlock, '<FIGMA_AVATARS_AVATAR_BLOCK>', {
  props: AVATAR_BLOCK_PROPS,
  example: ({ children, ...props }) => (
    <SdsAvatarBlock {...props}>{children}</SdsAvatarBlock>
  ),
});
