import figma, { html } from '@figma/code-connect/html';
import {
  AVATAR_PROPS,
  AVATAR_BLOCK_PROPS,
  AVATAR_GROUP_PROPS,
} from 'src/props/sds-avatar';

figma.connect('<FIGMA_AVATARS_AVATAR_GROUP>', {
  props: AVATAR_GROUP_PROPS,
  example: ({ children, spacing }) => html`
    <sds-avatar-group spacing=${spacing} max="3">
      ${children}
    </sds-avatar-group>
  `,
});

figma.connect('<FIGMA_AVATARS_AVATAR>', {
  props: AVATAR_PROPS,
  example: ({ square, initials, src, size }) =>
    html`<sds-avatar
      square=${square}
      initials=${initials}
      src=${src}
      size=${size}
    ></sds-avatar>`,
});

figma.connect('<FIGMA_AVATARS_AVATAR_BLOCK>', {
  props: AVATAR_BLOCK_PROPS,
  example: ({ children, avatarTitle, description }) =>
    html`<sds-avatar-block
      avatar-title=${avatarTitle}
      description=${description}
      >${children}</sds-avatar-block
    >`,
});
