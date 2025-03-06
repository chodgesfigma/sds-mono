import figma from '@figma/code-connect';

type TEXTAREA_FIELD_PROPS_LABEL = {
  isDisabled: boolean;
  placeholder: string;
  errorMessage: string;
  label: string;
  value: string;
  description?: string;
};

export const TEXTAREA_FIELD_PROPS_NO_LABEL = {
  isDisabled: figma.enum('State', { Disabled: true }),
  value: figma.enum('Value Type', {
    Default: figma.string('Value'),
  }),
  placeholder: figma.enum('Value Type', {
    default: 'I am a placeholder...',
    Placeholder: figma.string('Value'),
  }),
};

export const TEXTAREA_FIELD_PROPS_LABEL: TEXTAREA_FIELD_PROPS_LABEL = {
  isDisabled: figma.enum('State', { Disabled: true }),
  errorMessage: figma.enum('State', { Error: figma.string('Error') }),
  label: figma.string('Label'),
  description: figma.boolean('Has Description', {
    true: figma.string('Description'),
    false: undefined,
  }),
  value: figma.enum('Value Type', {
    Default: figma.string('Value'),
  }),
  placeholder: figma.enum('Value Type', {
    default: 'I am a placeholder...',
    Placeholder: figma.string('Value'),
  }),
};
