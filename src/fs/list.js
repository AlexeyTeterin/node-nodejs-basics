import {promises as fs} from 'fs';
import {DIR_FILES, handleError} from './helpers.js';

export const list = async () => {
  const filesDir = await fs.readdir(DIR_FILES).catch(handleError);

  console.log(filesDir);

  return filesDir;
};

list();
