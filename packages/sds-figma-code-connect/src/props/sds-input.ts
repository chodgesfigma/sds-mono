import figma from '@figma/code-connect';

export const INPUT_FIELD_PROPS_NO_LABEL = {
  disabled: figma.enum('State', { Disabled: true }),
  value: figma.enum('Value Type', {
    Default: figma.string('Value'),
  }),
  placeholder: figma.enum('Value Type', {
    default: 'I am a placeholder...',
    Placeholder: figma.string('Value'),
  }),
};

export const INPUT_FIELD_PROPS_LABEL = {
  disabled: figma.enum('State', { Disabled: true }),
  error: figma.enum('State', { Error: figma.string('Error') }),
  label: figma.string('Label'),
  description: figma.boolean('Has Description', {
    true: figma.string('Description'),
  }),
  value: figma.enum('Value Type', {
    Default: figma.string('Value'),
  }),
  placeholder: figma.enum('Value Type', {
    default: 'I am a placeholder...',
    Placeholder: figma.string('Value'),
  }),
};
