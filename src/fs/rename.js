import {DIR_FILES, handleError} from './helpers.js';
import {promises as fs} from 'fs';
import path from 'path';

export const rename = async () => {
  const properFilename = 'properFilename.md';
  const oldPath = path.join(DIR_FILES, 'wrongFilename.txt');
  const newPath = path.join(DIR_FILES, properFilename);

  const fileNames = await fs.readdir(DIR_FILES).catch(handleError);
  const isProperExists = fileNames
    .find((fileName) => fileName === properFilename);

  if (isProperExists) {
    handleError();
  }

  await fs.rename(oldPath, newPath).catch(handleError);
};

rename();
