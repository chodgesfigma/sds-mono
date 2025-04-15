import React from 'react';
import figma from '@figma/code-connect';
import { SdsSearch } from 'sds-react-components';

import { SEARCH_PROPS } from 'src/props/sds-search';

figma.connect(SdsSearch, '<FIGMA_INPUTS_SEARCH>', {
  props: SEARCH_PROPS,
  example: ({ ...props }) => <SdsSearch {...props} />,
});
