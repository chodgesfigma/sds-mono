import figma, { html } from '@figma/code-connect/html';
import { ICON_BUTTON_PROPS } from 'src/props/sds-icon-button';

figma.connect('<FIGMA_BUTTONS_ICON_BUTTON>', {
  props: ICON_BUTTON_PROPS,
  example: ({ icon, size, variant, disabled }) =>
    html`<SdsIconButton
      size=${size}
      variant=${variant}
      disabled=${disabled}
      aria-label="Write a nice description of the action."
    >
      ${icon}
    </SdsIconButton>`,
});
