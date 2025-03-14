import React from 'react';
import figma from '@figma/code-connect';
import { SdsTextarea, SdsTextareaField } from 'sds-react-components';

import {
  TEXTAREA_FIELD_PROPS_NO_LABEL,
  TEXTAREA_FIELD_PROPS_LABEL,
} from 'src/props/sds-textarea';

figma.connect(SdsTextarea, '<FIGMA_INPUTS_TEXTAREA_FIELD>', {
  variant: { 'Has Label': false },
  props: TEXTAREA_FIELD_PROPS_NO_LABEL,
  example: ({ ...props }) => <SdsTextarea {...props}></SdsTextarea>,
});

figma.connect(SdsTextarea, '<FIGMA_INPUTS_TEXTAREA_FIELD>', {
  variant: { 'Has Label': true },
  props: TEXTAREA_FIELD_PROPS_LABEL,
  example: ({ ...props }) => <SdsTextareaField {...props}></SdsTextareaField>,
});
