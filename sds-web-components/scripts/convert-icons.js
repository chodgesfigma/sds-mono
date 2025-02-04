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
  return `
import { Component, Prop, h } from '@stencil/core';
import { Icon, IconSize } from '../primitives/Icon/Icon';

@Component({
  tag: 'icon-%name%',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon%Name% {
  @Prop() size?: IconSize = '16';

  render() {
    return (
      <Icon size={this.size}>
        %svg%
      </Icon>
    );
  }
}`
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

  console.log(`re-writing: ${name} icon to ${filepath}`);
  fs.writeFileSync(filepath, output, { encoding: 'utf-8' });
};


const getFiles = () => {
  const files = fs.readdirSync(path.resolve(iconFolderPath));
  console.log(`found: ${files.length} files`)
  files.forEach((filename) => convertFile(filename));
}

getFiles();