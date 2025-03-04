import { convertToPascalCase } from 'scripts/utils';

export const templateHTMLCodeConnect = (
  componentName: string
) => `import figma, { html } from '@figma/code-connect/html';
import { PROPS } from 'src/props/${componentName}';

// update PROPS with appropriate definitions and a unique name in src/props/${componentName}
// replace <URL> with appropriate value from [documentUrlSubstitutions.json]
figma.connect('<URL>', {
  props: PROPS,
  example: ({ label }) => html\`<${componentName}>\${label}</${componentName}>\`,
});`;

export const templateReactCodeConnect = (
  componentName: string
) => `import React from 'react';
import figma from '@figma/code-connect';
import { PROPS } from 'src/props/${componentName}';
import { ${convertToPascalCase(componentName)} } from 'sds-react-components';

// update PROPS with appropriate definitions and a unique name in src/props/${componentName}
// replace <URL> with appropriate value from [documentUrlSubstitutions.json]
figma.connect(${convertToPascalCase(componentName)}, '<URL>', {
  props: PROPS,
  example: ({ label }) => <${convertToPascalCase(componentName)}>{label}</${convertToPascalCase(componentName)}>,
});
`;

export const templateProps = (
  componentName: string
) => `import figma from '@figma/code-connect';

// props for ${componentName}
// read more about prop definitions at [https://www.figma.com/code-connect-docs/html/#the-figma-import]
// make sure to update "PROPS" to be a unique name for this set of props
export const PROPS = {
  label: figma.string("label"),
};`;
