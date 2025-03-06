import figma, { html } from '@figma/code-connect/html';
import {
  SELECT_FIELD_PROPS_NO_LABEL,
  SELECT_FIELD_PROPS_LABEL,
} from 'src/props/sds-select';

figma.connect('<FIGMA_INPUTS_SELECT_FIELD>', {
  variant: { 'Has Label': false },
  props: SELECT_FIELD_PROPS_NO_LABEL,
  example: ({ placeholder, selectedValue, disabled }) =>
    html`<sds-select placeholder=${placeholder} disabled=${disabled}>
      <sds-select-item selected>${selectedValue}</sds-select-item>
      <sds-select-item>Option 2</sds-select-item>
      <sds-select-item>Option 3</sds-select-item>
      <sds-select-item>Option 4</sds-select-item>
      <sds-select-item>Option 5</sds-select-item>
    </sds-select>`,
});

figma.connect('<FIGMA_INPUTS_SELECT_FIELD>', {
  variant: { 'Has Label': true },
  props: SELECT_FIELD_PROPS_LABEL,
  example: ({
    placeholder,
    selectedValue,
    disabled,
    label,
    error,
    description,
  }) =>
    html`<sds-select-field
      placeholder=${placeholder}
      disabled=${disabled}
      label=${label}
      error=${error}
      description=${description}
    >
      <sds-select-item selected>${selectedValue}</sds-select-item>
      <sds-select-item>Option 2</sds-select-item>
      <sds-select-item>Option 3</sds-select-item>
      <sds-select-item>Option 4</sds-select-item>
      <sds-select-item>Option 5</sds-select-item>
    </sds-select-field>`,
});
