import figma, { html } from '@figma/code-connect/html';
import {
  AVATAR_PROPS,
  AVATAR_BLOCK_PROPS,
  AVATAR_GROUP_PROPS,
} from 'src/props/sds-avatar';

figma.connect('<FIGMA_AVATARS_AVATAR_GROUP>', {
  props: AVATAR_GROUP_PROPS,
  example: ({ children, spacing }) => html`
    <SdsAvatarGroup spacing=${spacing} max="3"> ${children} </SdsAvatarGroup>
  `,
});
figma.connect('<FIGMA_AVATARS_AVATAR>', {
  props: AVATAR_PROPS,
  example: ({ square, initials, src, size }) =>
    html`<SdsAvatar
      square=${square}
      initials=${initials}
      src=${src}
      size=${size}
    ></SdsAvatar>`,
});

figma.connect('<FIGMA_AVATARS_AVATAR_BLOCK>', {
  props: AVATAR_BLOCK_PROPS,
  example: ({ children, avatarTitle, description }) =>
    html`<SdsAvatarBlock avatarTitle=${avatarTitle} description=${description}
      >${children}</SdsAvatarBlock
    >`,
});
