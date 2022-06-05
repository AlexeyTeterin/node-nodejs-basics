import {stdin} from 'process';
import {createWriteStream} from 'fs';
import path from 'path';

export const write = async () => {
  const filePath = path.resolve('files', 'fileToWrite.txt');
  const stream = createWriteStream(filePath);

  stdin.pipe(stream);
  stream.on('error', (err) => console.log(err.message));
};


await write();
