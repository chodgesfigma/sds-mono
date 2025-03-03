import figma from '@figma/code-connect';

export const ACCORDION_PROPS = {
  children: figma.children('Accordion Item'),
};

export const ACCORION_ITEM_PROPS = {
  title: figma.string('Title'),
  content: figma.string('Content'),
};
