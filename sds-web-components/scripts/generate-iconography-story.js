/**
 * This script will pull in any .tsx files from the defined folder above, then use the templates to create a .mdx file for storybook.
 * It uses the same util as the converter, so element tags should be the same, as both are derived from the filenames.
 */

import path from 'path';
import fs from 'fs';
import { convertToKebabCase } from './utils.js';

/**
 * Folder where Icon components are defined
 */
const iconFolderPath = 'src/ui/icons/';

const iconTemplate = ({ iconTag, iconName }) => {
  return `  <IconItem name="%name%">
    <%tag%></%tag%>
  </IconItem>
`.replace('%name%', iconName).replaceAll('%tag%', iconTag);
};

const fileTemplate = ({ icons }) => {
  return `import { Meta, Title, IconGallery, IconItem } from '@storybook/addon-docs';

<Meta title="Iconography" />
 
# Iconography
> Generated via \`scripts/generate-iconography-story\`

<IconGallery>
  %icons%
</IconGallery>
`.replace('%icons%', icons);
};

const generate = () => {
  const files = fs.readdirSync(path.resolve(iconFolderPath)).filter((fileName) => /\.tsx$/.test(fileName));
  console.log(`found: ${files.length} files`);
  const iconElements = files
    .map(filename => filename.replace('.tsx', ''))
    .map(fileName => iconTemplate({ iconName: fileName.replace('SdsIcon', ''), iconTag: convertToKebabCase(fileName)}))
    .join('');
  const output = fileTemplate({ icons: iconElements });

  const outputFilepath = path.resolve(iconFolderPath, `icons.mdx`);
  console.log(`writing: ${outputFilepath}`);
  fs.writeFileSync(outputFilepath, output, { encoding: 'utf-8' });
}

generate();