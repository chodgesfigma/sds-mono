import fs from 'fs';
import path from 'path';

/**
 * Creates a file relative to the specified path if the file doesn't exist.
 * Creates directories as needed.
 * Does not overwrite existing files.
 * @param {string} filePath - the file path
 * @param {string} fileContent - the file content
 * @returns {string} the file path if the file was created, otherwise null
 */
export const scaffoldFile = (filePath: string, fileContent: string): string | null => {
  const outputDir = path.dirname(filePath);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping creating ${filePath}; already exists.`);
    return null;
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`File ${filePath} has been scaffolded.`);

  return filePath;
};
