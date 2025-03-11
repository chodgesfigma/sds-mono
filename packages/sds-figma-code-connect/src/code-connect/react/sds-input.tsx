import React from 'react';
import figma from '@figma/code-connect';
import { SdsInput, SdsInputField } from 'sds-react-components';

import {
  INPUT_FIELD_PROPS_NO_LABEL,
  INPUT_FIELD_PROPS_LABEL,
} from 'src/props/sds-input';

figma.connect(SdsInput, '<FIGMA_INPUTS_INPUT_FIELD>', {
  variant: { 'Has Label': false },
  props: INPUT_FIELD_PROPS_NO_LABEL,
  example: ({ ...props }) => <SdsInput {...props}></SdsInput>,
});

figma.connect(SdsInputField, '<FIGMA_INPUTS_INPUT_FIELD>', {
  variant: { 'Has Label': true },
  props: INPUT_FIELD_PROPS_LABEL,
  example: ({ ...props }) => <SdsInputField {...props}></SdsInputField>,
});
