import figma from '@figma/code-connect';

type TABS_PROPS = {
  children: ReturnType<typeof figma.children>;
};

export const TAB_PROPS = {
  label: figma.string('Label'),
};

export const TABS_PROPS = {
  children: figma.children(['Tab']),
};
