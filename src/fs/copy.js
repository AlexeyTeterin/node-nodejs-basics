import path from 'path';
import {promises as fs} from 'fs';
import {DIR_FILES, DIR_FILES_COPY, handleError} from './helpers.js';

export const copy = async () => {
  await fs.mkdir(DIR_FILES_COPY).catch(handleError);

  const filesDir = await fs.readdir(DIR_FILES).catch(handleError);

  filesDir.forEach(async (fileName) => {
    await fs.copyFile(
      path.join(DIR_FILES, fileName),
      path.join(DIR_FILES_COPY, fileName),
    ).catch(handleError);
  });
};


copy();
