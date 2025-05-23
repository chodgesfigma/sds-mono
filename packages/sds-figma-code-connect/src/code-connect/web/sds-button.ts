import figma, { html } from '@figma/code-connect/html';
import {
  BUTTON_PROPS,
  BUTTON_DANGER_PROPS,
  BUTTON_GROUP_PROPS,
} from 'src/props/sds-button';

figma.connect('<FIGMA_BUTTONS_BUTTON>', {
  props: BUTTON_PROPS,
  example: ({ label, size, variant, iconStart, iconEnd, disabled }) =>
    html`<sds-button disabled=${disabled} size=${size} variant=${variant}
      >${iconStart}${label}${iconEnd}</sds-button
    >`,
});

figma.connect('<FIGMA_BUTTONS_BUTTON_DANGER>', {
  props: BUTTON_DANGER_PROPS,
  example: ({ label, size, variant, iconStart, iconEnd, disabled }) =>
    html`<sds-button-danger disabled=${disabled} size=${size} variant=${variant}
      >${iconStart}${label}${iconEnd}</sds-button-danger
    >`,
});

figma.connect('<FIGMA_BUTTONS_BUTTON_GROUP>', {
  props: BUTTON_GROUP_PROPS,
  example: ({ align, children }) =>
    html`<sds-button-group align=${align}>${children}</sds-button-group>`,
});
