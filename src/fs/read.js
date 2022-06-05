import {DIR_FILES, handleError} from './helpers.js';
import {promises as fs} from 'fs';
import path from 'path';

export const read = async () => {
  const textBuffer = await fs
    .readFile(path.join(DIR_FILES, 'fileToRead.txt'))
    .catch(handleError);

  console.log(textBuffer.toString());
};

read();
