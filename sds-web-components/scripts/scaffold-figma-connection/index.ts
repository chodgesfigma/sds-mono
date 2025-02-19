import { template } from './template';
import fs from 'fs/promises';
import path from 'path';

const figmaBasePath = 'src/figma/';

// eslint-disable-next-line no-useless-escape
const nameParamFormat = new RegExp(/^((?:[\w\-]+\/)*)([a-z][\w-]+)$/);
const componentArg = process.argv[2];

if (!componentArg) {
  throw 'Component name was not passed. Usage: npm run figma <ComponentName>';
}

const regExResult = nameParamFormat.exec(componentArg);

if (regExResult === null) {
  throw `Component name should start with an lowercase letter and contain only letters, numbers,
dashes, or underscores. If specifying a path, it must be relative to src/components`;
}

export type ScaffoldComponentConfig = {
  componentName: string;
  componentPath: string;
};
const config: ScaffoldComponentConfig = {
  componentPath: regExResult[1] || '',
  componentName: regExResult[2] || '',
};

try {
  await fs.writeFile(path.resolve(figmaBasePath, `${componentArg}.figma.ts`), template(config.componentName), { encoding: 'utf-8' });
  console.log(`Created ${config.componentName}`);
} catch (error) {
  console.error(error);
}
