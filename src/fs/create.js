import path from 'path';
import {promises as fs} from 'fs';
import {DIR_FILES, FILE_FRESH, handleError} from './helpers.js';

export const create = async () => {
  try {
    await fs.stat(DIR_FILES);
  } catch (err) {
    await fs.mkdir(DIR_FILES).catch(handleError);
  }

  const files = await fs.readdir(DIR_FILES);
  const isFileFreshExists = files.some((file) => file === FILE_FRESH);

  if (isFileFreshExists) {
    handleError();
  } else {
    const fileFreshPath = path.join(DIR_FILES, FILE_FRESH);
    await fs
      .writeFile(fileFreshPath, 'I am fresh and young')
      .catch(handleError);
  }
};

create();
