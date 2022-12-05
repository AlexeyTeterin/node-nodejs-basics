import {archiveFilePath, srcFilePath} from './constants.js';
import {pipeline, Transform} from 'stream';
import {createReadStream, createWriteStream} from 'fs';
import {gzipSync} from 'zlib';

const compressTransform = (chunk, encoding, callback) => {
  callback(null, gzipSync(chunk));
};

const compressStream = new Transform({transform: compressTransform});

export const compress = async () => {
  pipeline(
    createReadStream(srcFilePath),
    compressStream,
    createWriteStream(archiveFilePath),
    () => {},
  );
};

compress();
