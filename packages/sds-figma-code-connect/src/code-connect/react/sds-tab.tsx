import React from 'react';
import figma from '@figma/code-connect';
import { SdsTab, SdsTabs, SdsTabPanel } from 'sds-react-components';

import { TAB_PROPS, TABS_PROPS } from 'src/props/sds-tab';

figma.connect(SdsTab, '<FIGMA_TABS_TAB>', {
  props: TAB_PROPS,
  example: ({ label }) => <SdsTab panelId={label}>{label}</SdsTab>,
});

figma.connect('<FIGMA_TABS_TABS>', {
  props: TABS_PROPS,
  example: ({ children }) => (
    <SdsTabs>
      ${children}
      <SdsTabPanel panelId='match-each-tab'>Some stuff</SdsTabPanel>
    </SdsTabs>
  ),
});
