import figma from '@figma/code-connect';
import React from 'react';
import {
  SdsButton,
  SdsButtonGroup,
  SdsButtonDanger,
} from 'sds-react-components';

import {
  BUTTON_PROPS,
  BUTTON_DANGER_PROPS,
  BUTTON_GROUP_PROPS,
} from 'src/props/sds-button';

figma.connect(SdsButton, '<FIGMA_BUTTONS_BUTTON>', {
  props: BUTTON_PROPS,
  example: ({ label, iconEnd, iconStart, ...props }) => (
    <SdsButton onClick={() => {}} {...props}>
      {iconStart}
      {label}
      {iconEnd}
    </SdsButton>
  ),
});

figma.connect(SdsButtonDanger, '<FIGMA_BUTTONS_BUTTON_DANGER>', {
  props: BUTTON_DANGER_PROPS,
  example: ({ label, iconEnd, iconStart, ...props }) => (
    <SdsButtonDanger onClick={() => {}} {...props}>
      {iconStart}
      {label}
      {iconEnd}
    </SdsButtonDanger>
  ),
});

figma.connect(SdsButtonGroup, '<FIGMA_BUTTONS_BUTTON_GROUP>', {
  props: BUTTON_GROUP_PROPS,
  example: ({ children, ...props }) => (
    <SdsButtonGroup {...props}>{children}</SdsButtonGroup>
  ),
});
