import figma, { html } from '@figma/code-connect/html';
import {
  PAGINATION_LIST_PROPS,
  PAGINATION_NEXT_PROPS,
  PAGINATION_PAGE_PROPS,
  PAGINATION_PREVIOUS_PROPS,
  PAGINATION_PROPS,
} from 'src/props/sds-pagination';

figma.connect('<FIGMA_PAGINATION_PAGINATION_PAGE>', {
  props: PAGINATION_PAGE_PROPS,
  example: ({ pageNumber, current }) => html`
    <sds-pagination-page current=${current} pageNumber=${pageNumber}>
      ${pageNumber}
    </sds-pagination-page>
  `,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION_GAP>', {
  example: () => html`<sds-pagination-gap></sds-pagination-gap>`,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION_PREVIOUS>', {
  props: PAGINATION_PREVIOUS_PROPS,
  example: ({ href }) => html`<sds-pagination-previous href=${href} />`,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION_NEXT>', {
  props: PAGINATION_NEXT_PROPS,
  example: ({ href }) => html`<sds-pagination-next href=${href} />`,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION_LIST>', {
  props: PAGINATION_LIST_PROPS,
  example: ({ children }) =>
    html`<sds-pagination-list>${children}</sds-pagination-list>`,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION>', {
  props: PAGINATION_PROPS,
  example: ({ children }) => html`<sds-pagination>${children}</sds-pagination>`,
});
