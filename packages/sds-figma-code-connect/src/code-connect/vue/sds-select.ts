import figma, { html } from '@figma/code-connect/html';
import {
  SELECT_FIELD_PROPS_NO_LABEL,
  SELECT_FIELD_PROPS_LABEL,
} from 'src/props/sds-select';

figma.connect('<FIGMA_INPUTS_SELECT_FIELD>', {
  variant: { 'Has Label': false },
  props: SELECT_FIELD_PROPS_NO_LABEL,
  example: ({ placeholder, selectedValue, disabled }) =>
    html`<SdsSelect placeholder=${placeholder} disabled=${disabled}>
      <SdsSelectItem selected>${selectedValue}</SdsSelectItem>
      <SdsSelectItem>Option 2</SdsSelectItem>
      <SdsSelectItem>Option 3</SdsSelectItem>
      <SdsSelectItem>Option 4</SdsSelectItem>
      <SdsSelectItem>Option 5</SdsSelectItem>
    </SdsSelect>`,
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
    html`<SdsSelectField
      placeholder=${placeholder}
      disabled=${disabled}
      label=${label}
      error=${error}
      description=${description}
    >
      <SdsSelectItem selected>${selectedValue}</SdsSelectItem>
      <SdsSelectItem>Option 2</SdsSelectItem>
      <SdsSelectItem>Option 3</SdsSelectItem>
      <SdsSelectItem>Option 4</SdsSelectItem>
      <SdsSelectItem>Option 5</SdsSelectItem>
    </SdsSelectField>`,
});
