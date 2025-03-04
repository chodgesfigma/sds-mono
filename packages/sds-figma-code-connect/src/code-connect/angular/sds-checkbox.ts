import figma, { html } from '@figma/code-connect/html';
import { CHECKBOX_PROPS, CHECKBOX_GROUP_PROPS } from 'src/props/sds-checkbox';

figma.connect('<FIGMA_INPUTS_CHECKBOX_FIELD>', {
  props: CHECKBOX_PROPS,
  example: ({ label, description, selected, indeterminate, isDisabled }) =>
    html`<sds-checkbox-field
      label=${label}
      description=${description}
      disabled=${isDisabled}
      ${selected}
      ${indeterminate}
    ></sds-checkbox-field>`,
});

figma.connect('<FIGMA_INPUTS_CHECKBOX_GROUP>', {
  props: CHECKBOX_GROUP_PROPS,
  example: ({ children }) =>
    html`<sds-checkbox-group>${children}</sds-checkbox-group>`,
});
