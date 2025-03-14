import figma from '@figma/code-connect';

export const CHECKBOX_PROPS = {
  label: figma.string('Label'),
  description: figma.boolean('Has Description', {
    true: figma.string('Description'),
    false: undefined,
  }),
  selected: figma.enum('Value Type', {
    Checked: true,
  }),
  indeterminate: figma.enum('Value Type', {
    Indeterminate: true,
  }),
  disabled: figma.enum('State', {
    Disabled: true,
  }),
};

export const CHECKBOX_GROUP_PROPS = {
  children: figma.children(['Checkbox Field']),
};
