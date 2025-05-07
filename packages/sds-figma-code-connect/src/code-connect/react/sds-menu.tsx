import React from 'react';
import figma from '@figma/code-connect';
import {
  SdsMenu,
  SdsMenuItem,
  SdsMenuPart,
  SdsMenuShortcut,
} from 'sds-react-components';

import {
  MENU_PROPS,
  MENU_HEADING_PROPS,
  MENU_SHORTCUT_PROPS,
  MENU_HEADER_PROPS,
  MENU_ITEM_PROPS,
} from 'src/props/sds-menu';

figma.connect(SdsMenu, '<FIGMA_MENU_MENU>', {
  props: MENU_PROPS,
  example: ({ children }) => <SdsMenu>{children}</SdsMenu>,
});

figma.connect(SdsMenuPart, '<FIGMA_MENU_MENU_HEADING>', {
  props: MENU_HEADING_PROPS,
  example: ({ heading }) => (
    <SdsMenuPart variant='heading'>{heading}</SdsMenuPart>
  ),
});

figma.connect(SdsMenuShortcut, '<FIGMA_MENU_MENU_SHORTCUT>', {
  props: MENU_SHORTCUT_PROPS,
  example: ({ shortcut }) => <SdsMenuShortcut>{shortcut}</SdsMenuShortcut>,
});

figma.connect(SdsMenuItem, '<FIGMA_MENU_MENU_ITEM>', {
  props: MENU_ITEM_PROPS,
  example: ({ icon, label, description, shortcut, isDisabled }) => (
    <SdsMenuItem isDisabled={isDisabled}>
      {icon}
      <SdsMenuPart variant='label'>{label}</SdsMenuPart>
      {shortcut}
      <SdsMenuPart variant='description'>{description}</SdsMenuPart>
    </SdsMenuItem>
  ),
});

figma.connect(SdsMenuPart, '<FIGMA_MENU_MENU_HEADER>', {
  props: MENU_HEADER_PROPS,
  example: ({ header, subhead }) => (
    <SdsMenuPart variant='header'>
      {subhead}
      {header}
    </SdsMenuPart>
  ),
});

figma.connect(SdsMenuPart, '<FIGMA_MENU_MENU_SEPARATOR>', {
  example: () => <SdsMenuPart variant='separator'></SdsMenuPart>,
});
