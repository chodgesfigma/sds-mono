import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_INPUTS_SLIDER_FIELD>', {
  props: {
    isDisabled: figma.enum('State', { Disabled: true }),
    label: figma.boolean('Has Label', {
      true: figma.string('Label'),
      false: undefined,
    }),
    description: figma.boolean('Has Description', {
      true: figma.string('Description'),
      false: undefined,
    }),
  },
  example: ({ label, isDisabled, description }) => html`<sds-slider description=${description} label=${label} disabled=${isDisabled}></sds-slider>`,
});
