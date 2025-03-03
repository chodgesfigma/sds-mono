import figma from '@figma/code-connect';

type ICON_BUTTON_PROPS = {
  icon: ReturnType<typeof figma.instance>;
  isDisabled: boolean;
  size: string;
  variant: string;
};

export const ICON_BUTTON_PROPS: ICON_BUTTON_PROPS = {
  icon: figma.instance('Icon'),
  isDisabled: figma.enum('State', {
    Disabled: true,
  }),
  size: figma.enum('Size', {
    Small: 'small',
  }),
  variant: figma.enum('Variant', {
    Neutral: 'neutral',
    Subtle: 'subtle',
  }),
};
