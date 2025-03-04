import React from 'react';
import figma from '@figma/code-connect';
import { CHECKBOX_PROPS, CHECKBOX_GROUP_PROPS } from 'src/props/sds-checkbox';
import { SdsCheckboxField, SdsCheckboxGroup } from 'sds-react-components';

figma.connect(SdsCheckboxField, '<FIGMA_INPUTS_CHECKBOX_FIELD>', {
  props: CHECKBOX_PROPS,
  example: ({ indeterminate, selected, ...props }) => (
    <SdsCheckboxField
      indeterminate={indeterminate}
      selected={selected}
      {...props}
    ></SdsCheckboxField>
  ),
});

figma.connect(SdsCheckboxGroup, '<FIGMA_INPUTS_CHECKBOX_GROUP>', {
  props: CHECKBOX_GROUP_PROPS,
  example: ({ children }) => <SdsCheckboxGroup>${children}</SdsCheckboxGroup>,
});
