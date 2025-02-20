import figma, { html } from '@figma/code-connect/html';

const sharedProps = {
  label: figma.string('Label'),
  iconStart: figma.boolean('Has Icon Start', {
    true: figma.instance('Icon Start'),
    false: undefined,
  }),
  iconEnd: figma.boolean('Has Icon End', {
    true: figma.instance('Icon End'),
    false: undefined,
  }),
  size: figma.enum('Size', {
    Small: 'small',
  }),
  isDisabled: figma.enum('State', {
    Disabled: true,
  }),
};

figma.connect('<FIGMA_BUTTONS_BUTTON>', {
  props: {
    ...sharedProps,
    variant: figma.enum('Variant', {
      Neutral: 'neutral',
      Subtle: 'subtle',
    }),
  },
  example: ({ label, size, variant, iconStart, iconEnd }) => html`<sds-button size=${size} variant=${variant}>${iconStart}${label}${iconEnd}</sds-button>`,
});

figma.connect('<FIGMA_BUTTONS_BUTTON_DANGER>', {
  props: {
    ...sharedProps,
    variant: figma.enum('Variant', {
      Subtle: 'danger-subtle',
    }),
  },
  example: ({ label, size, variant, iconStart, iconEnd }) => html`<sds-button-danger size=${size} variant=${variant}>${iconStart}${label}${iconEnd}</sds-button-danger>`,
});

figma.connect('<FIGMA_BUTTONS_BUTTON_GROUP>', {
  props: {
    align: figma.enum('Align', {
      Center: 'center',
      End: 'end',
      Justify: 'justify',
      Stack: 'stack',
    }),
    children: figma.children(['Button']),
  },
  example: ({ align, children }) => html`<sds-button-group align=${align}>${children}</sds-button-group>`,
});
