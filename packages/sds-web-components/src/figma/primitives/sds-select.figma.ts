import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_INPUTS_SELECT_FIELD>', {
  variant: { 'Has Label': false },
  props: {
    isDisabled: figma.enum('State', { Disabled: true }),
    placeholder: figma.enum('Value Type', {
      default: 'I am a placeholder...',
      Placeholder: figma.string('Value'),
    }),
    selectedValue: figma.string('Value'),
  },
  example: ({ placeholder, selectedValue, isDisabled }) =>
    html`<sds-select placeholder=${placeholder} disabled=${isDisabled}>
      <sds-select-item selected>${selectedValue}</sds-select-item>
      <sds-select-item>Option 2</sds-select-item>
      <sds-select-item>Option 3</sds-select-item>
      <sds-select-item>Option 4</sds-select-item>
      <sds-select-item>Option 5</sds-select-item>
    </sds-select>`,
});

figma.connect('<FIGMA_INPUTS_SELECT_FIELD>', {
  variant: { 'Has Label': true },
  props: {
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
  },
  example: ({ placeholder, selectedValue, isDisabled, label, errorMessage, description }) =>
    html`<sds-select-field placeholder=${placeholder} disabled=${isDisabled} label=${label} error=${errorMessage} description=${description}>
      <sds-select-item selected>${selectedValue}</sds-select-item>
      <sds-select-item>Option 2</sds-select-item>
      <sds-select-item>Option 3</sds-select-item>
      <sds-select-item>Option 4</sds-select-item>
      <sds-select-item>Option 5</sds-select-item>
    </sds-select-field>`,
});
