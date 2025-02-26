import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_INPUTS_INPUT_FIELD>', {
  variant: { 'Has Label': false },
  props: {
    isDisabled: figma.enum('State', { Disabled: true }),
    value: figma.enum('Value Type', {
      Default: figma.string('Value'),
    }),
    placeholder: figma.enum('Value Type', {
      default: 'I am a placeholder...',
      Placeholder: figma.string('Value'),
    }),
  },
  example: ({ isDisabled, value, placeholder }) =>
    html`<sds-input
      disabled=${isDisabled}
      defaultValue=${value}
      placeholder=${placeholder}
    ></sds-input>`,
});

figma.connect('<FIGMA_INPUTS_INPUT_FIELD>', {
  variant: { 'Has Label': true },
  props: {
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
  },
  example: ({
    isDisabled,
    value,
    placeholder,
    description,
    label,
    errorMessage,
  }) =>
    html`<sds-input-field
      label=${label}
      error=${errorMessage}
      description=${description}
      disabled=${isDisabled}
      defaultValue=${value}
      placeholder=${placeholder}
    ></sds-input-field>`,
});
