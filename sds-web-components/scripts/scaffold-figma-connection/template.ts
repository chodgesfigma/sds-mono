export const template = (componentName: string) => `import figma, { html } from '@figma/code-connect/html';

// replace <URL> with appropriate value from [sds-web-components/figma.config.json]
// read more about prop definitions at [https://www.figma.com/code-connect-docs/html/#the-figma-import]
figma.connect('<URL>', {
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => html\`<${componentName}>\${label}</${componentName}>\`,
});`;
