import figma from '@figma/code-connect';

export const SEARCH_PROPS = {
  defaultValue: figma.enum('Value Type', {
    Default: figma.string('Value'),
  }),
  placeholder: figma.enum('Value Type', {
    Default: 'Placeholder here...',
    Placeholder: figma.string('Value'),
  }),
  disabled: figma.enum('State', {
    Disabled: true,
  }),
};
