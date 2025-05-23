import figma from '@figma/code-connect';

type SLIDER_PROPS = {
  disabled: boolean;
  label?: string;
  description?: string;
};

export const SLIDER_PROPS: SLIDER_PROPS = {
  disabled: figma.enum('State', { Disabled: true }),
  label: figma.boolean('Has Label', {
    true: figma.string('Label'),
    false: undefined,
  }),
  description: figma.boolean('Has Description', {
    true: figma.string('Description'),
    false: undefined,
  }),
};
