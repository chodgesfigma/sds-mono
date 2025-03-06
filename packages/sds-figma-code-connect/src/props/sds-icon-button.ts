import figma from '@figma/code-connect';
import { ButtonSize, DefaultVariant } from 'sds-web-components';

type ICON_BUTTON_PROPS = {
  icon: any;
  disabled: boolean;
  size: ButtonSize;
  variant: DefaultVariant;
};

export const ICON_BUTTON_PROPS: ICON_BUTTON_PROPS = {
  icon: figma.instance('Icon'),
  disabled: figma.enum('State', {
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
