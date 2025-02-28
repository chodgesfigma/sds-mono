import figma from '@figma/code-connect/html';

export const INPUT_FIELD_PROPS_NO_LABEL = {
  isDisabled: figma.enum('State', { Disabled: true }),
  value: figma.enum('Value Type', {
    Default: figma.string('Value'),
  }),
  placeholder: figma.enum('Value Type', {
    default: 'I am a placeholder...',
    Placeholder: figma.string('Value'),
  }),
};

export const INPUT_FIELD_PROPS_WITH_LABEL = {
  isDisabled: figma.enum('State', { Disabled: true }),
  errorMessage: figma.enum('State', { Error: figma.string('Error') }),
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
