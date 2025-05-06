import figma, { html } from '@figma/code-connect/html';
import { TOOLTIP_PROPS } from 'src/props/sds-tooltip';

figma.connect('<FIGMA_TOOLTIP_TOOLTIP>', {
  props: TOOLTIP_PROPS,
  example: ({ placement, title, body }) =>
    html` <sds-tooltip placement=${placement}>
      <sds-text-strong>${title}</sds-text-strong>
      <sds-text-small>${body}</sds-text-small>
    </sds-tooltip>`,
});
