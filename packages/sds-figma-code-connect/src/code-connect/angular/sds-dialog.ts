import figma, { html } from '@figma/code-connect/html';
import { DIALOG_BODY_PROPS, DIALOG_PROPS } from 'src/props/sds-dialog';

figma.connect('<FIGMA_DIALOG_DIALOG_BODY>', {
  props: DIALOG_BODY_PROPS,
  example: ({ heading, body, buttons, dialogType }) => html`
    <sds-dialog dialogType=${dialogType}>
      <sds-dialog-close />
      <sds-dialog-title>${heading}</sds-dialog-title>
      <sds-dialog-body>${body}</sds-dialog-body>
      ${buttons}
    </sds-dialog>
  `,
});

figma.connect('<FIGMA_DIALOG_DIALOG>', {
  props: DIALOG_PROPS,
  example: ({ children }) => html`
    <sds-dialog-modal isDismissible isOpen> ${children} </sds-dialog-modal>
  `,
});
