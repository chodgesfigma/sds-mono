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
    <SdsPaginationPage current=${current} pageNumber=${pageNumber}>
      ${pageNumber}
    </SdsPaginationPage>
  `,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION_GAP>', {
  example: () => html`<SdsPaginationGap></SdsPaginationGap>`,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION_PREVIOUS>', {
  props: PAGINATION_PREVIOUS_PROPS,
  example: ({ href }) => html`<SdsPaginationPrevious href=${href} />`,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION_NEXT>', {
  props: PAGINATION_NEXT_PROPS,
  example: ({ href }) => html`<SdsPaginationNext href=${href} />`,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION_LIST>', {
  props: PAGINATION_LIST_PROPS,
  example: ({ children }) =>
    html`<SdsPaginationList>${children}</SdsPaginationList>`,
});

figma.connect('<FIGMA_PAGINATION_PAGINATION>', {
  props: PAGINATION_PROPS,
  example: ({ children }) => html`<SdsPagination>${children}</SdsPagination>`,
});
