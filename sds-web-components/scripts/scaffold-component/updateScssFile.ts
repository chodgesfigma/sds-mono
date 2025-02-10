import fs from 'fs/promises';
import path from 'path';

import { ScaffoldComponentConfig } from '.';

export const updateScssFile = async ({ componentName, componentPath }: ScaffoldComponentConfig) => {
  const textToPrepend = "@import 'reset';";

  const componentRoot = componentPath.startsWith('src/') ? '' : 'src/components';
  const __dirname = path.resolve();
  const file = path.join(__dirname, componentRoot, componentPath, componentName, `${componentName}.scss`);

  try {
    const data = await fs.readFile(file, 'utf8');
    const updatedData = `${textToPrepend}\n\n${data}`;
    await fs.writeFile(file, updatedData, 'utf8');
  } catch (err) {
    throw err;
  }
};
