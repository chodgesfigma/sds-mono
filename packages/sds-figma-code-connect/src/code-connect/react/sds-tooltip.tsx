import React from 'react';
import figma from '@figma/code-connect';
import { SdsTextSmall, SdsTextStrong, SdsTooltip } from 'sds-react-components';

import { TOOLTIP_PROPS } from 'src/props/sds-tooltip';

figma.connect(SdsTooltip, '<FIGMA_TOOLTIP_TOOLTIP>', {
  props: TOOLTIP_PROPS,
  example: ({ title, body, ...props }) => (
    <SdsTooltip {...props}>
      <SdsTextStrong>{title}</SdsTextStrong>
      <SdsTextSmall>{body}</SdsTextSmall>
    </SdsTooltip>
  ),
});
