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
  example: ({ children }) => html`<SdsMenu>${children}</SdsMenu>`,
});

figma.connect('<FIGMA_MENU_MENU_HEADING>', {
  props: MENU_HEADING_PROPS,
  example: ({ heading }) =>
    html`<SdsMenuPart variant="heading">${heading}</SdsMenuPart>`,
});

figma.connect('<FIGMA_MENU_MENU_SHORTCUT>', {
  props: MENU_SHORTCUT_PROPS,
  example: ({ shortcut }) =>
    html`<SdsMenuShortcut>${shortcut}</SdsMenuShortcut>`,
});

figma.connect('<FIGMA_MENU_MENU_ITEM>', {
  props: MENU_ITEM_PROPS,
  example: ({ icon, label, description, shortcut, isDisabled }) =>
    html`<SdsMenuItem isDisabled=${isDisabled}>
      ${icon}
      <SdsMenuPart variant="label">${label}</SdsMenuPart>
      ${shortcut}
      <SdsMenuPart variant="description">${description}</SdsMenuPart>
    </SdsMenuItem>`,
});

figma.connect('<FIGMA_MENU_MENU_HEADER>', {
  props: MENU_HEADER_PROPS,
  example: ({ header, subhead }) =>
    html`<SdsMenuPart variant="header"> ${subhead} ${header} </SdsMenuPart>`,
});

figma.connect('<FIGMA_MENU_MENU_SEPARATOR>', {
  example: () => html`<SdsMenuPart variant="separator"></SdsMenuPart>`,
});
