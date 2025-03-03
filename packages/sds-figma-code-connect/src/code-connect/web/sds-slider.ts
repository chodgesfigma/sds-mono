import figma, { html } from '@figma/code-connect/html';
import { SLIDER_PROPS } from 'src/props/sds-slider';

figma.connect('<FIGMA_INPUTS_SLIDER_FIELD>', {
  props: SLIDER_PROPS,
  example: ({ label, isDisabled, description }) => html`<sds-slider description=${description} label=${label} disabled=${isDisabled}></sds-slider>`,
});
