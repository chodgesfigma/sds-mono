import figma from '@figma/code-connect';
import { TextAlign, TextDensity, TextSize } from 'sds-web-components';

export const TEXT_TITLE_HERO_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_TITLE_PAGE_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_SUBTITLE_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_HEADING_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_SUBHEADING_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_TEXT_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_EMPHASIS_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_LINK_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_STRONG_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_SMALL_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_CODE_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_LIST_PROPS = {
  children: figma.children('Text List Item'),
  title: figma.boolean('Has Title', {
    true: figma.children('Text Strong'),
    false: undefined,
  }),
  density: figma.enum<TextDensity>('Density', {
    Default: 'default',
    Tight: 'tight',
  }),
};

export const TEXT_LINK_LIST_PROPS = {
  children: figma.children('Text Link List Item'),
  title: figma.boolean('Has Title', {
    true: figma.children('Text Strong'),
    false: undefined,
  }),
  density: figma.enum<TextDensity>('Density', {
    Default: 'default',
    Tight: 'tight',
  }),
};

export const TEXT_LIST_ITEM_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_LINK_LIST_ITEM_PROPS = {
  text: figma.string('Text'),
};

export const TEXT_PRICE_PROPS = {
  label: figma.string('Label'),
  size: figma.enum<TextSize>('Size', {
    Small: 'small',
  }),
  currency: figma.string('Currency'),
  price: figma.string('Price'),
};

export const TEXT_CONTENT_HEADING_PROPS = {
  align: figma.enum<TextAlign>('Align', { Center: 'center' }),
  heading: figma.string('Heading'),
  subheading: figma.string('Subheading'),
};

export const TEXT_CONTENT_TITLE_PROPS = {
  align: figma.enum<TextAlign>('Align', { Center: 'center' }),
  title: figma.string('Title'),
  subtitle: figma.string('Subtitle'),
};
