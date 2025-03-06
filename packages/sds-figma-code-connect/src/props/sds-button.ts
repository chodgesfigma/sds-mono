import figma from '@figma/code-connect';

export const BUTTON_PROPS = {
  label: figma.string('Label'),
  iconStart: figma.boolean('Has Icon Start', {
    true: figma.instance('Icon Start'),
    false: undefined,
  }),
  iconEnd: figma.boolean('Has Icon End', {
    true: figma.instance('Icon End'),
    false: undefined,
  }),
  size: figma.enum('Size', {
    Small: 'small',
  }),
  isDisabled: figma.enum('State', {
    Disabled: true,
  }),
  variant: figma.enum('Variant', {
    Neutral: 'neutral',
    Subtle: 'subtle',
  }),
};

export const BUTTON_DANGER_PROPS = {
  label: figma.string('Label'),
  iconStart: figma.boolean('Has Icon Start', {
    true: figma.instance('Icon Start'),
    false: undefined,
  }),
  iconEnd: figma.boolean('Has Icon End', {
    true: figma.instance('Icon End'),
    false: undefined,
  }),
  size: figma.enum('Size', {
    Small: 'small',
  }),
  isDisabled: figma.enum('State', {
    Disabled: true,
  }),
  variant: figma.enum('Variant', {
    Subtle: 'danger-subtle',
  }),
};

export const BUTTON_GROUP_PROPS = {
  align: figma.enum('Align', {
    Center: 'center',
    End: 'end',
    Justify: 'justify',
    Stack: 'stack',
  }),
  children: figma.children(['Button']),
};
