import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_ACCORDION_ACCORDION>', {
  props: {
    children: figma.children('Accordion Item'),
  },
  example: ({ children }) => html`<sds-accordion>${children}</sds-accordion>`,
});

figma.connect('<FIGMA_ACCORDION_ACCORDION_ITEM>', {
  props: {
    title: figma.string('Title'),
    content: figma.string('Content'),
  },
  example: ({ title, content }) => html`<sds-accordion-item summary=${title}>${content}</sds-accordion-item>`,
});
