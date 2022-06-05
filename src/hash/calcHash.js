import {createHash} from 'crypto';
import path from 'path';
import {readFile} from 'fs/promises';

export const calculateHash = async () => {
  const filename = path.resolve('files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');

  hash.update(await readFile(filename));

  const hex = hash.digest('hex');
  console.log('hex:', hex);

  return hex;
};

calculateHash();
