import path from 'path';
import fs from 'fs';


const iconFolderPath = 'src/ui/icons/';

// util taken from: https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case
// with an additional replacement for ending numbers
const convertToKebabCase = (name) => {
  return name
    .replace(/[A-Z]+(?![a-z])|[A-Z]|\d$/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
}

const template = ({ name, svg }) => {
  return `import { Component, Prop, h } from '@stencil/core';
import { SdsIcon, Size } from '../primitives/SdsIcon/SdsIcon';

@Component({
  tag: 'sds-icon-%name%',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIcon%Name% {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        %svg%
      </SdsIcon>
    );
  }
}
`
  .replace('%name%', convertToKebabCase(name))
  .replace('%Name%', name)
  .replace('%svg%', svg.trim());
}

const convertFile = async (filename) => {
  if (!/.tsx$/.test(filename)) {
    console.log(`skipping: ${filename} is not a tsx file`);
    return;
  }

  const filepath = path.resolve(iconFolderPath, filename);
  const file = fs.readFileSync(filepath, { encoding: 'utf-8'});

  if (/@stencil\/core/.test(file)) {
    console.log(`skipping: ${filename} is already a stencil component`);
    return;
  }

  // Find icon's name, and the existing content within the <Icon>
  const svgContentRegex = /export const Icon(\w+) = \(props: IconProps\) => \(\W*(<Icon {\.\.\.props}>)((\S|\s)*)(<\/Icon>)/gm;
  const svgContent = svgContentRegex.exec(file);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, name, ___, svg] = svgContent;

  // replace React syntax for path attributes
  const normalizedSVG = svg
    .replaceAll('strokeWidth', 'stroke-width')
    .replaceAll('strokeLinecap', 'stroke-linecap')
    .replaceAll('clipPath', 'clip-path')
    .replaceAll('strokeLinejoin', 'stroke-linejoin');

  const output = template({name, svg: normalizedSVG});

  const outputFilepath = path.resolve(iconFolderPath, `Sds${filename}`);
  console.log(`re-writing: ${name} icon to ${outputFilepath}`);
  fs.writeFileSync(outputFilepath, output, { encoding: 'utf-8' });

  console.log(`removing: original ${filepath} file`);
  fs.unlink(filepath, (err) => {
    if (err) {
      console.error(err);
    }
  });
};


const getFiles = () => {
  const files = fs.readdirSync(path.resolve(iconFolderPath));
  console.log(`found: ${files.length} files`)
  files.forEach((filename) => convertFile(filename));
}

getFiles();