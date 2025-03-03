import React from 'react';
import figma from '@figma/code-connect';
import { ACCORDION_PROPS, ACCORION_ITEM_PROPS } from 'src/props/sds-accordion';
import { SdsAccordion, SdsAccordionItem } from 'sds-react-components';

figma.connect(SdsAccordion, '<FIGMA_ACCORDION_ACCORDION>', {
  props: ACCORDION_PROPS,
  example: ({ children }) => <SdsAccordion>{children}</SdsAccordion>,
});

figma.connect(SdsAccordionItem, '<FIGMA_ACCORDION_ACCORDION_ITEM>', {
  props: ACCORION_ITEM_PROPS,
  example: ({ ...props }) => <SdsAccordionItem {...props} />,
});
