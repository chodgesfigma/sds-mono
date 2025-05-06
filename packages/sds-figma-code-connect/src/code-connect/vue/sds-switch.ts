import figma, { html } from '@figma/code-connect/html';
import { SWITCH_PROPS } from 'src/props/sds-switch';

figma.connect('<FIGMA_INPUTS_SWITCH_FIELD>', {
  props: SWITCH_PROPS,
  example: ({ label, description, checked, disabled }) =>
    html`<SdsSwitchField
      label=${label}
      description=${description}
      checked=${checked}
      disabled=${disabled}
    ></SdsSwitchField>`,
});
