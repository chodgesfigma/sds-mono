import figma, { html } from '@figma/code-connect/html';
import { TAB_PROPS, TABS_PROPS } from 'src/props/sds-tab';

figma.connect('<FIGMA_TABS_TAB>', {
  props: TAB_PROPS,
  example: ({ label }) => html`<sds-tab panelId=${label}>${label}</sds-tab>`,
});

figma.connect('<FIGMA_TABS_TABS>', {
  props: TABS_PROPS,
  example: ({ children }) =>
    html` <sds-tabs>
      ${children}
      <sds-tab-panel panelId="match-each-tab">Some stuff</sds-tab-panel>
    </sds-tabs>`,
});
