import React from 'react';
import figma from '@figma/code-connect';
import {
  SdsPagination,
  SdsPaginationGap,
  SdsPaginationPage,
  SdsPaginationPrevious,
  SdsPaginationNext,
  SdsPaginationList,
} from 'sds-react-components';

import {
  PAGINATION_LIST_PROPS,
  PAGINATION_NEXT_PROPS,
  PAGINATION_PAGE_PROPS,
  PAGINATION_PREVIOUS_PROPS,
  PAGINATION_PROPS,
} from 'src/props/sds-pagination';

figma.connect(SdsPaginationPage, '<FIGMA_PAGINATION_PAGINATION_PAGE>', {
  props: PAGINATION_PAGE_PROPS,
  example: ({ pageNumber, ...props }) => (
    <SdsPaginationPage {...props}>{pageNumber}</SdsPaginationPage>
  ),
});

figma.connect(SdsPaginationGap, '<FIGMA_PAGINATION_PAGINATION_GAP>');

figma.connect(SdsPaginationPrevious, '<FIGMA_PAGINATION_PAGINATION_PREVIOUS>', {
  props: PAGINATION_PREVIOUS_PROPS,
  example: ({ ...props }) => <SdsPaginationPrevious {...props} />,
});

figma.connect(SdsPaginationNext, '<FIGMA_PAGINATION_PAGINATION_NEXT>', {
  props: PAGINATION_NEXT_PROPS,
  example: ({ ...props }) => <SdsPaginationNext {...props} />,
});

figma.connect(SdsPaginationList, '<FIGMA_PAGINATION_PAGINATION_LIST>', {
  props: PAGINATION_LIST_PROPS,
  example: ({ children }) => <SdsPaginationList>{children}</SdsPaginationList>,
});

figma.connect(SdsPagination, '<FIGMA_PAGINATION_PAGINATION>', {
  props: PAGINATION_PROPS,
  example: ({ children }) => <SdsPagination>{children}</SdsPagination>,
});
