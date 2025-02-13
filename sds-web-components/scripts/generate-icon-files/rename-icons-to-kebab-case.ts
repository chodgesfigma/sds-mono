import { convertToKebabCase } from './utils';
import fs from 'fs/promises';
import path from 'path';

const IconFolderPath = 'src/ui/icons/';

const onlyTSXFiles = (filename: string) => {
  if (!/.tsx$/.test(filename)) {
    // console.log(`skipping: ${filename} is not a tsx file`);
    return false;
  }
  return true;
};

const onlyPascalCaseNames = (filename: string) => {
  if (!/^[A-Z]/.test(filename)) {
    // console.log(`skipping: ${filename} appears to already be kebab-case`);
    return false;
  }

  return true;
};

const renameFile = async (filename: string) => {
  const originalFilepath = path.resolve(IconFolderPath, filename);
  const newFilepath = path.resolve(IconFolderPath, convertToKebabCase(filename.replace('.tsx', '')) + '.tsx');

  await fs.rename(originalFilepath, newFilepath);
};

const rename = async () => {
  const files = (await fs.readdir(path.resolve(IconFolderPath))).filter(onlyTSXFiles).filter(onlyPascalCaseNames);
  console.log(`found: ${files.length} valid files to rename`);

  files.forEach(renameFile);
};

rename();
