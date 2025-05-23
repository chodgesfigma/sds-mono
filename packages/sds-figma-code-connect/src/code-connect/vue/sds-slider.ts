import figma, { html } from '@figma/code-connect/html';
import { SLIDER_PROPS } from 'src/props/sds-slider';

figma.connect('<FIGMA_INPUTS_SLIDER_FIELD>', {
  props: SLIDER_PROPS,
  example: ({ label, disabled, description }) =>
    html`<SdsSlider
      description=${description}
      label=${label}
      disabled=${disabled}
    ></SdsSlider>`,
});
