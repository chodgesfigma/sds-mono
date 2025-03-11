import figma from '@figma/code-connect';
import { NavigationDirection } from 'sds-web-components';

export const NAVIGATION_PROPS = {
  children: figma.children('Navigation Pill'),
  direction: figma.enum<NavigationDirection>('Direction', {
    Row: 'row',
    Column: 'column',
  }),
};

export const NAVIGATION_PILL_PROPS = {
  label: figma.string('Label'),
  isSelected: figma.enum('State', {
    Active: true,
    Default: undefined,
    Hover: undefined,
  }),
};

export const NAVIGATION_BUTTON_LIST_PROPS = {
  children: figma.children('Navigation Button'),
  direction: figma.enum<NavigationDirection>('Direction', {
    Row: 'row',
    Column: 'column',
  }),
};

export const NAVIGATION_BUTTON_PROPS = {
  label: figma.string('Label'),
  icon: figma.boolean('Has Icon', {
    true: figma.instance('Icon'),
    false: undefined,
  }),
  isSelected: figma.enum('State', {
    Active: true,
    Default: undefined,
    Hover: undefined,
  }),
};
