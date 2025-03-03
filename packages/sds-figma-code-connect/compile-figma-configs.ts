import path from 'path';
import fs from 'fs/promises';
import { execSync } from 'child_process';

import documentUrlSubstitutions from './documentUrlSubstitutions.json';
import outputConfig from './outputConfig.json';

const CONFIG_OUT_FOLDER = 'configs';

const compileFigmaConfigs = async () => {
  const outputs = Object.entries(outputConfig);

  console.log('** Compiling Figma Code Connect configs');
  console.log(`Found ${outputs.length} outputs to compile...`);

  type ConfigFile = {
    codeConnect: {
      include?: string[];
      exclude?: string[];
      label?: string;
      parser?: string;
      documentUrlSubstitutions?: Record<string, string>;
    };
  };

  const publishCommands: string[] = [];

  for (let index = 0; index < outputs.length; index += 1) {
    const [outputName, outputConfig] = outputs[index];
    const config: ConfigFile = {
      codeConnect: {
        ...outputConfig,
        documentUrlSubstitutions,
      },
    };

    const filename = `figma.${outputName}.config.json`;
    const filepath = path.resolve(__dirname, CONFIG_OUT_FOLDER, filename);

    console.log(`Creating ${filename}...`);

    await fs.writeFile(filepath, JSON.stringify(config, null, 2), {
      encoding: 'utf-8',
    });

    // set publish script for this output
    await execSync(
      `npm pkg set scripts.publish:${outputName}='npx figma connect publish -c ${CONFIG_OUT_FOLDER}/figma.${outputName}.config.json'`
    );

    publishCommands.push(`publish:${outputName}`);
  }

  console.log(`Created ${publishCommands.length} config files...`);

  await execSync(
    `npm pkg set scripts.publish='npm-run-all --parallel ${publishCommands.map((command) => command).join(' ')}'`
  );

  console.log('Updated package.json scripts...');
  console.log(
    'Successfully compiled figma configs. Use `npm run build:code-connect` to generate code connect files.'
  );
};

compileFigmaConfigs();
