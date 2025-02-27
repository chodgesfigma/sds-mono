import figma, { html } from '@figma/code-connect/html';

// replace <URL> with appropriate value from [sds-web-components/figma.config.json]
// read more about prop definitions at [https://www.figma.com/code-connect-docs/html/#the-figma-import]
figma.connect('<FIGMA_INPUTS_TEXTAREA_FIELD>', {
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
  example: ({ isDisabled, value, placeholder }) => html`<sds-textarea disabled=${isDisabled} value=${value} placeholder=${placeholder}></sds-textarea>`,
});

figma.connect('<FIGMA_INPUTS_TEXTAREA_FIELD>', {
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
  example: ({ isDisabled, value, placeholder, errorMessage, label, description }) =>
    html`<sds-textarea-field
      disabled=${isDisabled}
      value=${value}
      placeholder=${placeholder}
      error=${errorMessage}
      label=${label}
      description=${description}
    ></sds-textarea-field>`,
});
