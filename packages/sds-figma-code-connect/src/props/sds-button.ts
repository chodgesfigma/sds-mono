import figma from '@figma/code-connect';
import {
  ButtonSize,
  DefaultVariant,
  DangerVariant,
  ButtonGroupAlignment,
} from 'sds-web-components';

export const BUTTON_PROPS = {
  label: figma.string('Label'),
  iconStart: figma.boolean('Has Icon Start', {
    true: figma.instance('Icon Start'),
    false: undefined,
  }),
  iconEnd: figma.boolean('Has Icon End', {
    true: figma.instance('Icon End'),
    false: undefined,
  }),
  size: figma.enum<ButtonSize>('Size', {
    Small: 'small',
  }),
  disabled: figma.enum('State', {
    Disabled: true,
  }),
  variant: figma.enum<DefaultVariant>('Variant', {
    Neutral: 'neutral',
    Subtle: 'subtle',
  }),
};

export const BUTTON_DANGER_PROPS = {
  label: figma.string('Label'),
  iconStart: figma.boolean('Has Icon Start', {
    true: figma.instance('Icon Start'),
    false: undefined,
  }),
  iconEnd: figma.boolean('Has Icon End', {
    true: figma.instance('Icon End'),
    false: undefined,
  }),
  size: figma.enum<ButtonSize>('Size', {
    Small: 'small',
  }),
  disabled: figma.enum('State', {
    Disabled: true,
  }),
  variant: figma.enum<DangerVariant>('Variant', {
    Subtle: 'danger-subtle',
  }),
};

export const BUTTON_GROUP_PROPS = {
  align: figma.enum<ButtonGroupAlignment>('Align', {
    Center: 'center',
    End: 'end',
    Justify: 'justify',
    Stack: 'stack',
  }),
  children: figma.children(['Button']),
};
