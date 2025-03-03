import figma, { html } from '@figma/code-connect/html';
import {
  BUTTON_DANGER_PROPS,
  BUTTON_GROUP_PROPS,
  BUTTON_PROPS,
} from 'src/props/sds-button';

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
  imports: ['import { SdsButton } from "sds-vue-components";'],
  props: BUTTON_PROPS,
  example: ({ label, size, variant, iconStart, iconEnd, isDisabled }) =>
    html`<SdsButton
      disabled=${isDisabled}
      size=${size}
      variant=${variant}
      @click="() => {}"
    >
      ${iconStart}${label}${iconEnd}
    </SdsButton>`,
});

figma.connect('<FIGMA_BUTTONS_BUTTON_DANGER>', {
  imports: ['import { SdsButtonDanger } from "sds-vue-components";'],
  props: BUTTON_DANGER_PROPS,
  example: ({ label, size, variant, iconStart, iconEnd, isDisabled }) =>
    html`<SdsButtonDanger
      disabled=${isDisabled}
      size=${size}
      variant=${variant}
      @click="() => {}"
    >
      ${iconStart}${label}${iconEnd}
    </SdsButtonDanger>`,
});

figma.connect('<FIGMA_BUTTONS_BUTTON_GROUP>', {
  imports: ['import { SdsButtonGroup } from "sds-vue-components";'],
  props: BUTTON_GROUP_PROPS,
  example: ({ align, children }) =>
    html`<SdsButtonGroup align=${align}>${children}</SdsButtonGroup>`,
});
