import {DIR_FILES, handleError} from './helpers.js';
import {promises as fs} from 'fs';
import path from 'path';

export const remove = async () => {
  await fs.rm(path.join(DIR_FILES, 'fileToRemove.txt')).catch(handleError);
};

remove();
