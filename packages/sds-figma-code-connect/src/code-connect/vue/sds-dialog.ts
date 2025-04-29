import figma, { html } from '@figma/code-connect/html';
import { DIALOG_BODY_PROPS, DIALOG_PROPS } from 'src/props/sds-dialog';

figma.connect('<FIGMA_DIALOG_DIALOG_BODY>', {
  props: DIALOG_BODY_PROPS,
  example: ({ heading, body, buttons, dialogType }) => html`
    <SdsDialog dialogType=${dialogType}>
      <SdsDialogClose />
      <SdsDialogTitle>${heading}</SdsDialogTitle>
      <SdsDialogBody>${body}</SdsDialogBody>
      ${buttons}
    </SdsDialog>
  `,
});

figma.connect('<FIGMA_DIALOG_DIALOG>', {
  props: DIALOG_PROPS,
  example: ({ children }) => html`
    <SdsDialogModal isDismissible isOpen> ${children} </SdsDialogModal>
  `,
});
