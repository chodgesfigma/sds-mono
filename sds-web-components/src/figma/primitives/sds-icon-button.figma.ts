import figma, { html } from '@figma/code-connect/html';

const sharedProps = {
  icon: figma.instance('Icon'),
  isDisabled: figma.enum('State', {
    Disabled: true,
  }),
  size: figma.enum('Size', {
    Small: 'small',
  }),
};

figma.connect('<FIGMA_BUTTONS_ICON_BUTTON>', {
  props: {
    ...sharedProps,
    variant: figma.enum('Variant', {
      Neutral: 'neutral',
      Subtle: 'subtle',
    }),
  },
  example: ({ icon, size, variant }) => html`<sds-button size=${size} variant=${variant}>${icon}</sds-button>`,
});
