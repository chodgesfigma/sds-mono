import figma, { html } from '@figma/code-connect/html';
import { ACCORDION_PROPS, ACCORION_ITEM_PROPS } from 'src/props/sds-accordion';

figma.connect('<FIGMA_ACCORDION_ACCORDION>', {
  props: ACCORDION_PROPS,
  example: ({ children }) => html`<sds-accordion>${children}</sds-accordion>`,
});

figma.connect('<FIGMA_ACCORDION_ACCORDION_ITEM>', {
  props: ACCORION_ITEM_PROPS,
  example: ({ title, content }) =>
    html`<sds-accordion-item summary=${title}>${content}</sds-accordion-item>`,
});
