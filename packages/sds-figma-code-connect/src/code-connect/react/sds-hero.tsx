import React from 'react';
import figma from '@figma/code-connect';
import { SdsHero } from 'sds-react-components';

import {
  HERO_BASIC_PROPS,
  HERO_ACTIONS_PROPS,
  HERO_NEWSLETTER_PROPS,
  HERO_FORM_PROPS,
  HERO_IMAGE_PROPS,
} from 'src/props/sds-hero';

figma.connect(SdsHero, '<FIGMA_SECTIONS_HERO_BASIC>', {
  props: HERO_BASIC_PROPS,
  example: ({ children }) => <SdsHero variant='subtle'>{children}</SdsHero>,
});
figma.connect(SdsHero, '<FIGMA_SECTIONS_HERO_ACTIONS>', {
  props: HERO_ACTIONS_PROPS,
  example: ({ children }) => <SdsHero variant='subtle'>{children}</SdsHero>,
});
figma.connect(SdsHero, '<FIGMA_SECTIONS_HERO_NEWSLETTER>', {
  props: HERO_NEWSLETTER_PROPS,
  example: ({ children }) => <SdsHero variant='subtle'>{children}</SdsHero>,
});
figma.connect(SdsHero, '<FIGMA_SECTIONS_HERO_FORM>', {
  props: HERO_FORM_PROPS,
  example: ({ children }) => <SdsHero variant='subtle'>{children}</SdsHero>,
});
figma.connect(SdsHero, '<FIGMA_SECTIONS_HERO_IMAGE>', {
  props: HERO_IMAGE_PROPS,
  example: ({ children }) => (
    <SdsHero variant='image' src='/images/placeholder.svg'>
      {children}
    </SdsHero>
  ),
});
