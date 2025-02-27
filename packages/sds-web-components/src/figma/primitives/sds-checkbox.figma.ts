import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_INPUTS_CHECKBOX_FIELD>', {
  props: {
    label: figma.string('Label'),
    description: figma.boolean('Has Description', {
      true: figma.string('Description'),
      false: undefined,
    }),
    selected: figma.enum('Value Type', {
      Checked: 'selected',
      Indeterminate: 'indeterminate',
    }),
    isIndeterminate: figma.enum('Value Type', {
      Indeterminate: true,
    }),
    isDisabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: ({ label, description, selected, isDisabled }) =>
    html`<sds-checkbox-field label=${label} description=${description} disabled=${isDisabled} ${selected}></sds-checkbox-field>`,
});

figma.connect('<FIGMA_INPUTS_CHECKBOX_GROUP>', {
  props: {
    children: figma.children(['Checkbox Field']),
  },
  example: ({ children }) => html`<sds-checkbox-group>${children}</sds-checkbox-group>`,
});
