import { moveFiles } from './moveFiles';
import { scaffoldComponent } from './scaffoldComponent';
import { updateScssFile } from './updateScssFile';

// Matches component names that start with a lower case letter, and contain only letters, number,
// underscores, or dashes. Optionally, the component name can be preceded by a relative path

// eslint-disable-next-line no-useless-escape
const nameParamFormat = new RegExp(/^((?:[\w\-]+\/)*)([a-z][\w-]+)$/);
const componentArg = process.argv[2];

if (!componentArg) {
  throw 'Component name was not passed. Usage: npm run scaffold <ComponentName>';
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

scaffoldComponent(config);

updateScssFile(config)

// Move files from `src/components` to `src/ui`
moveFiles(config);
