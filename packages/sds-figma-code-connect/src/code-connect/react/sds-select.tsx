import React from 'react';
import figma from '@figma/code-connect';
import { SdsSelect, SdsSelectField } from 'sds-react-components';

import {
  SELECT_FIELD_PROPS_LABEL,
  SELECT_FIELD_PROPS_NO_LABEL,
} from 'src/props/sds-select';

figma.connect(SdsSelect, '<FIGMA_INPUTS_SELECT_FIELD>', {
  variant: { 'Has Label': false },
  props: SELECT_FIELD_PROPS_NO_LABEL,
  example: ({ ...props }) => <SdsSelect {...props}></SdsSelect>,
});

figma.connect(SdsSelectField, '<FIGMA_INPUTS_SELECT_FIELD>', {
  variant: { 'Has Label': true },
  props: SELECT_FIELD_PROPS_LABEL,
  example: ({ ...props }) => <SdsSelectField {...props}></SdsSelectField>,
});
