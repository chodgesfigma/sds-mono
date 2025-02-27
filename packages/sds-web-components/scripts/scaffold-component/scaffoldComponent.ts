import { ScaffoldComponentConfig } from '.';
import { scaffoldFile } from './scaffoldFile';
import storyTemplate from './templates/storyTemplate';
import path from 'path';

export const scaffoldComponent = (config: ScaffoldComponentConfig) => {
  const { componentName, componentPath } = config;

  const getOutputFilePath = (filename: string) => {
    const componentRoot = componentPath.startsWith('src/') ? '' : 'src/components';
    const outputFilePath = path.join(componentRoot, componentPath, componentName, filename);
    return outputFilePath;
  };

  // storybook story
  const storyFilename = `${componentName}.stories.tsx`;
  const storyOutputPath = getOutputFilePath(storyFilename);
  scaffoldFile(storyOutputPath, storyTemplate(componentName, componentPath));
};
