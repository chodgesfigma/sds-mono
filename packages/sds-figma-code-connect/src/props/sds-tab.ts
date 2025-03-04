import figma from '@figma/code-connect';

export const TAB_PROPS = {
  label: figma.string('Label'),
};

export const TABS_PROPS = {
  children: figma.children(['Tab']),
};
