import figma from '@figma/code-connect';

type TAG_TOGGLE_PROPS = {
  label: string;
  selected: boolean;
  iconStart: ReturnType<typeof figma.instance>;
};

export const TAG_PROPS = {
  onRemove: figma.boolean('Removable'),
  label: figma.string('Label'),
  variant: figma.enum('Variant', {
    Secondary: 'secondary',
  }),
  scheme: figma.enum('Scheme', {
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
