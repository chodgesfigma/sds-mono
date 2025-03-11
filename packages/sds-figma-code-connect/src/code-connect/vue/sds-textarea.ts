import figma, { html } from '@figma/code-connect/html';
import {
  TEXTAREA_FIELD_PROPS_NO_LABEL,
  TEXTAREA_FIELD_PROPS_LABEL,
} from 'src/props/sds-textarea';

figma.connect('<FIGMA_INPUTS_TEXTAREA_FIELD>', {
  variant: { 'Has Label': false },
  props: TEXTAREA_FIELD_PROPS_NO_LABEL,
  example: ({ disabled, value, placeholder }) =>
    html`<SdsTextarea
      disabled=${disabled}
      value=${value}
      placeholder=${placeholder}
    ></SdsTextarea>`,
});

figma.connect('<FIGMA_INPUTS_TEXTAREA_FIELD>', {
  variant: { 'Has Label': true },
  props: TEXTAREA_FIELD_PROPS_LABEL,
  example: ({ disabled, value, placeholder, error, label, description }) =>
    html`<SdsTextareaField
      disabled=${disabled}
      value=${value}
      placeholder=${placeholder}
      error=${error}
      label=${label}
      description=${description}
    ></SdsTextareaField>`,
});
