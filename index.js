const fs = require('fs');
const sysPath = require('path');

const readFile = name => fs.readFileSync(sysPath.join(__dirname, name), 'utf8');
const requireJs = readFile('require.js');

module.exports = requireJs;
