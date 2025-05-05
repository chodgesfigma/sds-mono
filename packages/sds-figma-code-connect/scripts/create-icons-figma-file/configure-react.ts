import { Parser } from './util';

export const configureReact: Parser = (data) => {
  return `import figma from "@figma/code-connect";

// generated via \`sds-figma-code-connect/scripts/create-icons-figma-file/\`   

import { ${data.map(([pascalName]) => `Sds${pascalName}`).join(', ')} } from 'sds-react-components';
${data
  .map(([pascalName, _component, figmaConnect]) => {
    return figmaConnect.replaceAll(pascalName, `Sds${pascalName}`);
  })
  .join('\n')}
  `;
};
