import figma, { html } from '@figma/code-connect/html';
import { NOTIFICATION_PROPS } from 'src/props/sds-notification';

figma.connect('<FIGMA_NOTIFICATION_NOTIFICATION>', {
  props: NOTIFICATION_PROPS,
  example: ({ button, body, title, icon, isDismissible, variant }) =>
    html`<sds-notification is-dismissible=${isDismissible} variant=${variant}>
      <span slot="icon">${icon}</span>
      <sds-text-strong>${title}</sds-text-strong>
      <sds-text>${body}</sds-text>
      ${button}
    </sds-notification>`,
});
