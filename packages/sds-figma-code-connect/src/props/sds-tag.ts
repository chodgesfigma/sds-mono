import figma from '@figma/code-connect';
import { TagScheme, TagVariant } from 'sds-web-components';

type TAG_TOGGLE_PROPS = {
  label: string;
  selected: boolean;
  iconStart: any;
};

export const TAG_PROPS = {
  removable: figma.boolean('Removable'),
  label: figma.string('Label'),
  variant: figma.enum<TagVariant>('Variant', {
    Secondary: 'secondary',
  }),
  scheme: figma.enum<TagScheme>('Scheme', {
    Danger: 'danger',
    Positive: 'positive',
    Warning: 'warning',
    Neutral: 'neutral',
  }),
  state: figma.enum('State', {
    Hover: 'hover',
    Default: 'default',
  }),
};

export const TAG_TOGGLE_PROPS: TAG_TOGGLE_PROPS = {
  label: figma.string('Label'),
  iconStart: figma.instance('Icon'),
  selected: figma.boolean('State'),
};

export const TAG_TOGGLE_GROUP_PROPS = {
  children: figma.children('Tag Toggle'),
};
