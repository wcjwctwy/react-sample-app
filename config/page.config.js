'use strict';

const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports=[
    {
        pageName:'index',
        template:resolveApp('public/index.html'),
        entryFile:resolveApp('src/index.js'),
        chunks:['index']
    },
    {
        pageName:'app/index',
        template:resolveApp('public/app/index.html'),
        entryFile:resolveApp('src/app/index.js'),
        chunks:['app/index']
    }
];
