import {stdin, stdout} from 'process';
import {Transform, pipeline} from 'stream';

const reverseTransform = (chunk, encoding, callback) => {
  callback(null, chunk.reverse() + '\n\n');
};

const reverseStream = new Transform({transform: reverseTransform});

export const transform = async () => {
  pipeline(stdin, reverseStream, stdout, () => {});
};

await transform();
