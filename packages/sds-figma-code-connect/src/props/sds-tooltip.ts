import figma from '@figma/code-connect';

export const TOOLTIP_PROPS = {
  body: figma.boolean('Has Body', {
    true: figma.string('Body'),
    false: undefined,
  }),
  title: figma.string('Title'),
  placement: figma.enum('Placement', {
    Bottom: 'bottom',
    Top: 'top',
    Right: 'right',
    Left: 'left',
  }),
};
