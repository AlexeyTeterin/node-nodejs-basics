import path from 'path';

export const DIR_FILES = path.resolve('files');
export const DIR_FILES_COPY = path.resolve('files_copy');
export const FILE_FRESH = 'fresh.txt';


export const handleError = () => {
  throw new Error('FS operation failed');
};
