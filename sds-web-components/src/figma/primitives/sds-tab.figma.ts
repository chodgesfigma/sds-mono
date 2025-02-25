import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_TABS_TAB>', {
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => html`<sds-tab panel-id=${label}>${label}</sds-tab>`,
});

figma.connect('<FIGMA_TABS_TABS>', {
  props: {
    children: figma.children('Tab'),
  },
  example: ({ children }) =>
    html` <sds-tabs>
      ${children}
      <sds-tab-panel panel-id="match-each-tab">Some stuff</sds-tab-panel>
    </sds-tabs>`,
});
