import figma, { html } from '@figma/code-connect/html';
import {
  MENU_PROPS,
  MENU_HEADING_PROPS,
  MENU_SHORTCUT_PROPS,
  MENU_HEADER_PROPS,
  MENU_ITEM_PROPS,
} from 'src/props/sds-menu';

figma.connect('<FIGMA_MENU_MENU>', {
  props: MENU_PROPS,
  example: ({ children }) => html`<sds-menu>${children}</sds-menu>`,
});

figma.connect('<FIGMA_MENU_MENU_HEADING>', {
  props: MENU_HEADING_PROPS,
  example: ({ heading }) =>
    html`<sds-menu-part variant="heading">${heading}</sds-menu-part>`,
});

figma.connect('<FIGMA_MENU_MENU_SHORTCUT>', {
  props: MENU_SHORTCUT_PROPS,
  example: ({ shortcut }) =>
    html`<sds-menu-shortcut>${shortcut}</sds-menu-shortcut>`,
});

figma.connect('<FIGMA_MENU_MENU_ITEM>', {
  props: MENU_ITEM_PROPS,
  example: ({ icon, label, description, shortcut, isDisabled }) =>
    html`<sds-menu-item isDisabled=${isDisabled}>
      ${icon}
      <sds-menu-part variant="label">${label}</sds-menu-part>
      ${shortcut}
      <sds-menu-part variant="description">${description}</sds-menu-part>
    </sds-menu-item>`,
});

figma.connect('<FIGMA_MENU_MENU_HEADER>', {
  props: MENU_HEADER_PROPS,
  example: ({ header, subhead }) =>
    html`<sds-menu-part variant="header">
      ${subhead} ${header}
    </sds-menu-part>`,
});

figma.connect('<FIGMA_MENU_MENU_SEPARATOR>', {
  example: () => html`<sds-menu-part variant="separator"></sds-menu-part>`,
});
