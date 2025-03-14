import React from 'react';
import figma from '@figma/code-connect';
import { SdsButton } from 'sds-react-components';

import { ICON_BUTTON_PROPS } from 'src/props/sds-icon-button';

figma.connect(SdsButton, '<FIGMA_BUTTONS_ICON_BUTTON>', {
  props: ICON_BUTTON_PROPS,
  example: ({ icon, ...props }) => <SdsButton {...props}>{icon}</SdsButton>,
});
