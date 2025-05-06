import figma, { html } from '@figma/code-connect/html';
import { NOTIFICATION_PROPS } from 'src/props/sds-notification';

figma.connect('<FIGMA_NOTIFICATION_NOTIFICATION>', {
  props: NOTIFICATION_PROPS,
  example: ({ button, body, title, icon, isDismissible, variant }) =>
    html`<SdsNotification isDismissible=${isDismissible} variant=${variant}>
      <span slot="icon">${icon}</span>
      <SdsTextStrong>${title}</SdsTextStrong>
      <SdsText>${body}</SdsText>
      ${button}
    </SdsNotification>`,
});
