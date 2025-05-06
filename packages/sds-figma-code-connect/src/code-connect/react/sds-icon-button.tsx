import React from 'react';
import figma from '@figma/code-connect';
import { SdsIconButton } from 'sds-react-components';

import { ICON_BUTTON_PROPS } from 'src/props/sds-icon-button';

figma.connect(SdsIconButton, '<FIGMA_BUTTONS_ICON_BUTTON>', {
  props: ICON_BUTTON_PROPS,
  example: ({ icon, ...props }) => (
    <SdsIconButton
      {...props}
      aria-label='Write a nice description of the action.'
    >
      {icon}
    </SdsIconButton>
  ),
});
