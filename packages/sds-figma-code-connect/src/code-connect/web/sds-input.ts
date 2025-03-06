import figma, { html } from '@figma/code-connect/html';
import {
  INPUT_FIELD_PROPS_NO_LABEL,
  INPUT_FIELD_PROPS_LABEL,
} from 'src/props/sds-input';

figma.connect('<FIGMA_INPUTS_INPUT_FIELD>', {
  variant: { 'Has Label': false },
  props: INPUT_FIELD_PROPS_NO_LABEL,
  example: ({ isDisabled, value, placeholder }) =>
    html`<sds-input
      disabled=${isDisabled}
      default-value=${value}
      placeholder=${placeholder}
    ></sds-input>`,
});

figma.connect('<FIGMA_INPUTS_INPUT_FIELD>', {
  variant: { 'Has Label': true },
  props: INPUT_FIELD_PROPS_LABEL,
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
      default-value=${value}
      placeholder=${placeholder}
    ></sds-input-field>`,
});
