import React from 'react';
import figma from '@figma/code-connect';
import {
  SdsDialog,
  SdsDialogBody,
  SdsDialogClose,
  SdsDialogModal,
  SdsDialogTitle,
} from 'sds-react-components';

import { DIALOG_BODY_PROPS, DIALOG_PROPS } from 'src/props/sds-dialog';

figma.connect(SdsDialog, '<FIGMA_DIALOG_DIALOG_BODY>', {
  props: DIALOG_BODY_PROPS,
  example: ({ heading, body, buttons, ...props }) => (
    <SdsDialog {...props}>
      <SdsDialogClose />
      <SdsDialogTitle>{heading}</SdsDialogTitle>
      <SdsDialogBody>{body}</SdsDialogBody>
      {buttons}
    </SdsDialog>
  ),
});

figma.connect(SdsDialog, '<FIGMA_DIALOG_DIALOG>', {
  props: DIALOG_PROPS,
  example: ({ children }) => (
    <SdsDialogModal isDismissible isOpen>
      {children}
    </SdsDialogModal>
  ),
});
