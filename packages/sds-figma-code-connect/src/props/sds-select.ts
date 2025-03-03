import figma from '@figma/code-connect';

type SELECT_FIELD_PROPS_LABEL = {
  isDisabled: boolean;
  placeholder: string;
  selectedValue: string;
  errorMessage: string;
  label: string;
  description?: string;
};

export const SELECT_FIELD_PROPS_NO_LABEL = {
  isDisabled: figma.enum('State', { Disabled: true }),
  placeholder: figma.enum('Value Type', {
    default: 'I am a placeholder...',
    Placeholder: figma.string('Value'),
  }),
  selectedValue: figma.string('Value'),
};

export const SELECT_FIELD_PROPS_LABEL: SELECT_FIELD_PROPS_LABEL = {
  isDisabled: figma.enum('State', { Disabled: true }),
  placeholder: figma.enum('Value Type', {
    default: 'I am a placeholder...',
    Placeholder: figma.string('Value'),
  }),
  selectedValue: figma.string('Value'),
  errorMessage: figma.enum('State', { Error: figma.string('Error') }),
  label: figma.string('Label'),
  description: figma.boolean('Has Description', {
    true: figma.string('Description'),
    false: undefined,
  }),
};
