import {
  templateHTMLCodeConnect,
  templateProps,
  templateReactCodeConnect,
} from './templates';
import fs from 'fs/promises';
import path from 'path';

const PROPS_DIR = path.resolve('src', 'props');
const CODE_CONNECT_DIR = path.resolve('src', 'code-connect');

import outputConfig from '../../outputConfig.json';

type ScaffoldComponentConfig = {
  componentName: string;
  componentPath: string;
};

const scaffoldCodeConnect = async () => {
  // Grab input name from command line
  // eslint-disable-next-line no-useless-escape
  const nameParamFormat = new RegExp(/^((?:[\w\-]+\/)*)([a-z][\w-]+)$/);
  const componentArg = process.argv[2];

  if (!componentArg) {
    throw 'Component name was not passed. Usage: npm run scaffold <ComponentName>';
  }

  // make sure component name follows kebab casing
  const regExResult = nameParamFormat.exec(componentArg);

  if (regExResult === null) {
    throw `Component name should start with an lowercase letter and contain only letters, numbers,
  dashes, or underscores`;
  }

  const config: ScaffoldComponentConfig = {
    componentPath: regExResult[1] || '',
    componentName: regExResult[2] || '',
  };

  const outputs = Object.entries(outputConfig);

  try {
    const { componentName } = config;
    // create props file
    const propFileContent = templateProps(componentName);
    const propFilePath = path.resolve(PROPS_DIR, `${componentName}.ts`);
    try {
      await fs.writeFile(propFilePath, propFileContent, {
        encoding: 'utf-8',
        flag: 'wx',
      });
      console.log(`Created ${componentName} prop file...`);
    } catch (error) {
      if (error instanceof Error && error.message.includes('EEXIST')) {
        console.log(
          `Skipped creating ${componentName} prop file, as it already exists...`
        );
      } else {
        console.error(error);
      }
    }

    // create code-connect file for each output configured
    outputs.forEach(async ([outputName, outputConfig]) => {
      let isReact = false;
      if ('parser' in outputConfig) {
        isReact = outputConfig.parser === 'react';
      }

      const outputDir = path.resolve(CODE_CONNECT_DIR, outputName);
      const fileName = `${componentName}.ts${isReact ? 'x' : ''}`;

      const filePath = path.resolve(outputDir, fileName);

      const fileContent = isReact
        ? templateReactCodeConnect(componentName)
        : templateHTMLCodeConnect(componentName);

      try {
        await fs.writeFile(filePath, fileContent, {
          encoding: 'utf-8',
          flag: 'wx',
        });
        console.log(`Created ${outputName}/${fileName}...`);
      } catch (error) {
        if (error instanceof Error && error.message.includes('EEXIST')) {
          console.log(
            `Skipped creating ${outputName}/${fileName}, as it already exists...`
          );
        } else {
          console.error(error);
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
};

scaffoldCodeConnect();
