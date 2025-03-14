import figma, { html } from '@figma/code-connect/html';
import { CHECKBOX_PROPS, CHECKBOX_GROUP_PROPS } from 'src/props/sds-checkbox';

figma.connect('<FIGMA_INPUTS_CHECKBOX_FIELD>', {
  props: CHECKBOX_PROPS,
  example: ({ label, description, selected, indeterminate, disabled }) =>
    html`<SdsCheckboxField
      label=${label}
      description=${description}
      disabled=${disabled}
      ${selected}
      ${indeterminate}
    ></SdsCheckboxField>`,
});

figma.connect('<FIGMA_INPUTS_CHECKBOX_GROUP>', {
  props: CHECKBOX_GROUP_PROPS,
  example: ({ children }) =>
    html`<SdsCheckboxGroup>${children}</SdsCheckboxGroup>`,
});
