import figma from '@figma/code-connect';

export const MENU_PROPS = {
  children: figma.children([
    'Menu Header',
    'Menu Separator',
    'Menu Section',
    'Menu Item',
  ]),
};

export const MENU_HEADING_PROPS = {
  heading: figma.children('Text Strong'),
};

export const MENU_SHORTCUT_PROPS = {
  shortcut: figma.string('Shortcut'),
};

export const MENU_HEADER_PROPS = {
  header: figma.children('Text Strong'),
  subhead: figma.children('Text Small'),
};

export const MENU_DESCRIPTION_PROPS = {
  description: figma.string('Description'),
};

export const MENU_ITEM_PROPS = {
  icon: figma.boolean('Has Icon', {
    true: figma.instance('Icon'),
    false: undefined,
  }),
  shortcut: figma.boolean('Has Shortcut', {
    true: figma.children('Menu Shortcut'),
    false: undefined,
  }),
  label: figma.string('Label'),
  isDisabled: figma.enum('State', {
    Disabled: true,
  }),
  description: figma.boolean('Has Description', {
    true: figma.children('Menu Description'),
    false: undefined,
  }),
};
