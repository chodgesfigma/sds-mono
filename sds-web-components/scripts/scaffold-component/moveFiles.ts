import { ScaffoldComponentConfig } from '.';
import fs from 'fs/promises';
import path from 'path';

export const moveFiles = async ({ componentName, componentPath }: ScaffoldComponentConfig) => {
  const componentRoot = componentPath.startsWith('src/') ? '' : 'src/components';
  const __dirname = path.resolve();
  const sourceDir = path.join(__dirname, componentRoot, componentPath, componentName);
  const targetDir = path.join(__dirname, 'src/ui/', componentPath, componentName);

  const files = await fs.readdir(sourceDir);
  await Promise.all(
    files.map(async file => {
      const sourceFile = path.join(sourceDir, file);
      const targetFile = path.join(targetDir, file);
      await fs.mkdir(path.dirname(targetFile), { recursive: true });
      await fs.rename(sourceFile, targetFile);
    }),
  );

  await fs.rmdir(sourceDir);
};
