import React from 'react';
import figma from '@figma/code-connect';
import { SdsNotification, SdsText, SdsTextStrong } from 'sds-react-components';

import { NOTIFICATION_PROPS } from 'src/props/sds-notification';

figma.connect(SdsNotification, '<FIGMA_NOTIFICATION_NOTIFICATION>', {
  props: NOTIFICATION_PROPS,
  example: ({ button, body, title, icon: Icon, ...props }) => (
    <SdsNotification {...props}>
      <Icon slot='icon' />
      <SdsTextStrong>{title}</SdsTextStrong>
      <SdsText>{body}</SdsText>
      {button}
    </SdsNotification>
  ),
});
