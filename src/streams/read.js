import {createReadStream} from 'fs';
import path from 'path';
import {stdout} from 'process';

export const read = async () => {
  const filePath = path.resolve('files', 'fileToRead.txt');
  const stream = createReadStream(filePath);

  stream.pipe(stdout);
  stream.on('error', (err) => console.log(err.message));
};


await read();
