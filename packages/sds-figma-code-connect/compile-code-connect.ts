import path, { resolve } from 'path';
import fs from 'fs/promises';

import outputConfig from './outputConfig.json';

const outDirFolderName = 'dist';
const outDir = path.resolve(__dirname, outDirFolderName);

const propsDir = path.resolve(__dirname, 'src', 'props');
const codeConnectDir = path.resolve(__dirname, 'src', 'code-connect');

const propNameRegex = new RegExp(/export const ([\w]+)[: \w+]* = {/, 'g');
const propNameReplacementRegex = new RegExp(/props: (\w+),/, 'g');
const codeConnectBodyRegex = new RegExp(/(figma\.connect[\w\W]+)$/);
const reactImportRegex = new RegExp(
  /(import {[\w\W]+} from 'sds-react-components';)/
);

const compileCodeConnects = async () => {
  console.log('** Compiling Figma Code Connect files');

  const propMap: Record<string, string> = {};

  const propFiles = await fs.readdir(propsDir);

  console.log(`Found ${propFiles.length} prop files to parse...`);

  // go through each prop file, and pull out prop definitions
  for (let index = 0; index < propFiles.length; index += 1) {
    const filepath = propFiles[index];
    const propFileContent = await fs.readFile(
      path.resolve(propsDir, filepath),
      { encoding: 'utf-8' }
    );

    let match = propNameRegex.exec(propFileContent);
    const matches = [];
    while (match !== null) {
      matches.push(match[1]);
      match = propNameRegex.exec(propFileContent);
    }

    for (let i = 0; i < matches.length; i += 1) {
      const currentMatch = matches[i];
      const nextMatch = matches[i + 1];
      if (nextMatch) {
        const propsRegex = new RegExp(
          `export const ${currentMatch}[: \\w+]* = {([\\W\\w]+)};\n\nexport const ${nextMatch}`
        );
        const propDefinitions = propsRegex.exec(propFileContent);
        if (propDefinitions) {
          propMap[currentMatch] = propDefinitions[1];
        }
      } else {
        const propsRegex = new RegExp(
          `export const ${currentMatch}[: \\w+]* = {([\\W\\w]+)};\n$`
        );
        const propDefinitions = propsRegex.exec(propFileContent);
        if (propDefinitions) {
          propMap[currentMatch] = propDefinitions[1];
        }
      }
    }
  }
  console.log(`Parsed ${Object.keys(propMap).length} props...`);

  // use the configs to find output names
  const outputs = Object.entries(outputConfig);
  for (let index = 0; index < outputs.length; index += 1) {
    const [outputName, config] = outputs[index];

    let isReact = false;
    if ('parser' in config) {
      isReact = config.parser === 'react';
    }

    // use each key to find code connect templates in codeConnectDir/key
    const codeConnectTemplates = await fs.readdir(
      path.resolve(codeConnectDir, outputName)
    );

    console.log(
      `Found ${codeConnectTemplates.length} "${outputName}" templates to compile...`
    );

    const outputDir = path.resolve(outDir, outputName);

    await fs.mkdir(outputDir, { recursive: true });

    for (let i = 0; i < codeConnectTemplates.length; i += 1) {
      const templatePath = codeConnectTemplates[i];

      // pull in each template file
      const templateFileContent = await fs.readFile(
        path.resolve(codeConnectDir, outputName, templatePath),
        {
          encoding: 'utf-8',
        }
      );

      // find prop names that are being used within the template (ie `INPUT_FIELD_PROPS_WITH_LABEL`)
      let match = propNameReplacementRegex.exec(templateFileContent);
      const matches = [];
      while (match !== null) {
        matches.push(match[1]);
        match = propNameReplacementRegex.exec(templateFileContent);
      }

      // grab content from the first `figma.connect` to the end of the file
      const codeConnectBody = codeConnectBodyRegex.exec(templateFileContent);

      if (codeConnectBody) {
        // replace each instance of a prop with the defined values
        let codeConnectBodyContent = codeConnectBody[1];
        matches.forEach((match) => {
          const props = propMap[match];
          codeConnectBodyContent = codeConnectBodyContent.replace(
            match,
            `{${props}}`
          );
        });

        // if we're dealing with a react file, grab the `sds-react-components` imports
        let reactImports: string | null = null;
        if (isReact) {
          const reactImportMatch = reactImportRegex.exec(templateFileContent);
          reactImports = reactImportMatch ? reactImportMatch[1] : null;
        }

        const imports = isReact
          ? `import figma from '@figma/code-connect';\n${reactImports}`
          : "import figma, { html } from '@figma/code-connect/html';";

        // re-add in the figma import
        const outputContent = `${imports}\n${codeConnectBodyContent}`;

        const outputFilename = templatePath.replace('.ts', '.figma.ts');
        const outputPath = path.resolve(outputDir, outputFilename);

        await fs.writeFile(outputPath, outputContent, {
          encoding: 'utf-8',
        });

        console.log(
          `- Created ${outDirFolderName}/${outputName}/${outputFilename}...`
        );
      }
    }
  }

  console.log('Moving icons folder...');
  const iconDestination = path.resolve(outDir, 'icons');
  await fs.cp(path.resolve(codeConnectDir, 'icons'), iconDestination, {
    recursive: true,
  });
  console.log(`Moved icons folder to /${outDirFolderName}...`);

  console.log(
    'Successfully compiled code-connect files. Use `npm run publish` to sync code connect files with Figma.'
  );
};

compileCodeConnects();
