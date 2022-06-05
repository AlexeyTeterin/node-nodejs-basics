import {createServer as createServerHttp} from 'http';
import {fileURLToPath} from 'url'
import path from 'path';
import {readFile} from 'fs/promises';
import {release, version} from 'os';
import './files/c.js';

const __dirname = path.resolve();
const __filename = fileURLToPath(import.meta.url);
const random = Math.random();

console.log(__dirname)
const getUnknownObject = async (pathSegments) => JSON.parse(await readFile(path.resolve(__dirname, ...pathSegments)));
let unknownObject;

if (random > 0.5) {
    unknownObject = await getUnknownObject(['files', 'a.json']);
} else {
    unknownObject = await getUnknownObject(['files', 'b.json']);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

