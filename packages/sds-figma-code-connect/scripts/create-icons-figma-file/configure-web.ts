import { convertToKebabCase } from 'scripts/utils';
import { nodeIdRegex, Parser } from './util';

export const configureWeb: Parser = (data) => {
  return `import figma, { html } from '@figma/code-connect/html';

// generated via \`sds-figma-code-connect/scripts/create-icons-figma-file/\`

${data
  .map(([pascalName, _component, figmaConnect]) => {
    if (!figmaConnect || !pascalName) {
      return '';
    }
    const match = nodeIdRegex.exec(figmaConnect);
    if (!match) {
      return;
    }
    const nodeId = match[1];

    const name = convertToKebabCase(pascalName);

    return `figma.connect('<FIGMA_ICONS_BASE>?node-id=${nodeId}', {
\tprops: { size: figma.enum('Size', { '20': '20', '24': '24', '32': '32', '40': '40', '48': '48' }) },
\texample: ({ size }) => html\`<sds-${name} size=\${size}></sds-${name}>\`,
});`;
  })
  .join('\n')}
  `;
};
