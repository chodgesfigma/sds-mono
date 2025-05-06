import figma from '@figma/code-connect';
import { Gap, SectionPadding } from 'sds-web-components';

// props for sds-panel
export const PANEL_IMAGE_CONTENT_PROPS = {
  padding: figma.enum<SectionPadding>('Platform', {
    Desktop: '1600',
    Mobile: '600',
  }),
  gap: figma.enum<Gap>('Platform', { Desktop: '1200', Mobile: '600' }),
  children: figma.children(['Text Content Heading', 'Text']),
};

export const PANEL_IMAGE_CONTENT_REVERSE_PROPS = {
  padding: figma.enum<SectionPadding>('Platform', {
    Desktop: '1600',
    Mobile: '600',
  }),
  gap: figma.enum<Gap>('Platform', { Desktop: '1200', Mobile: '600' }),
  children: figma.children(['Text Content Heading', 'Text']),
};

export const PANEL_IMAGE_DOUBLE_PROPS = {
  padding: figma.enum<SectionPadding>('Platform', {
    Desktop: '1600',
    Mobile: '600',
  }),
  gap: figma.enum<Gap>('Platform', { Desktop: '1200', Mobile: '600' }),
};

export const PANEL_IMAGE_PROPS = {
  padding: figma.enum<SectionPadding>('Platform', {
    Desktop: '1600',
    Mobile: '600',
  }),
};
