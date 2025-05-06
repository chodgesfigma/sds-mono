import figma, { html } from '@figma/code-connect/html';
import { TOOLTIP_PROPS } from 'src/props/sds-tooltip';

figma.connect('<FIGMA_TOOLTIP_TOOLTIP>', {
  props: TOOLTIP_PROPS,
  example: ({ placement, title, body }) =>
    html` <SdsTooltip placement=${placement}>
      <SdsTextStrong>${title}</SdsTextStrong>
      <SdsTextSmall>${body}</SdsTextSmall>
    </SdsTooltip>`,
});
