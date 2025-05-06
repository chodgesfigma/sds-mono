import figma, { html } from '@figma/code-connect/html';
import {
  HERO_BASIC_PROPS,
  HERO_ACTIONS_PROPS,
  HERO_NEWSLETTER_PROPS,
  HERO_FORM_PROPS,
  HERO_IMAGE_PROPS,
} from 'src/props/sds-hero';

figma.connect('<FIGMA_SECTIONS_HERO_BASIC>', {
  props: HERO_BASIC_PROPS,
  example: ({ children }) =>
    html`<SdsHero variant="subtle">${children}</SdsHero>`,
});
figma.connect('<FIGMA_SECTIONS_HERO_ACTIONS>', {
  props: HERO_ACTIONS_PROPS,
  example: ({ children }) =>
    html`<SdsHero variant="subtle">${children}</SdsHero>`,
});
figma.connect('<FIGMA_SECTIONS_HERO_NEWSLETTER>', {
  props: HERO_NEWSLETTER_PROPS,
  example: ({ children }) =>
    html`<SdsHero variant="subtle">${children}</SdsHero>`,
});
figma.connect('<FIGMA_SECTIONS_HERO_FORM>', {
  props: HERO_FORM_PROPS,
  example: ({ children }) =>
    html`<SdsHero variant="subtle">${children}</SdsHero>`,
});
figma.connect('<FIGMA_SECTIONS_HERO_IMAGE>', {
  props: HERO_IMAGE_PROPS,
  example: ({ children }) => html`
    <SdsHero variant="image" src="/images/placeholder.svg">
      ${children}
    </SdsHero>
  `,
});
