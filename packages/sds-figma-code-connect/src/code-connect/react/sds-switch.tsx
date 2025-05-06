import React from 'react';
import figma from '@figma/code-connect';
import { SdsSwitchField } from 'sds-react-components';

import { SWITCH_PROPS } from 'src/props/sds-switch';

figma.connect(SdsSwitchField, '<FIGMA_INPUTS_SWITCH_FIELD>', {
  props: SWITCH_PROPS,
  example: ({ ...props }) => <SdsSwitchField {...props} />,
});
