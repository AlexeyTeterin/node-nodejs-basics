import {archiveFilePath, srcFilePath} from './constants.js';
import {pipeline, Transform} from 'stream';
import {createReadStream, createWriteStream} from 'fs';
import {gunzipSync} from 'zlib';

const decompressTransform = (chunk, encoding, callback) => {
  callback(null, gunzipSync(chunk));
};

const decompressStream = new Transform({transform: decompressTransform});

export const decompress = async () => {
  pipeline(
    createReadStream(archiveFilePath),
    decompressStream,
    createWriteStream(srcFilePath),
    () => {},
  );
};

await decompress();
