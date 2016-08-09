#! /usr/bin/env node
var shell = require('shelljs');
var glob = require('glob');
var path = require('path');

glob('src/**/*.jade', { root: path.resolve(__dirname, '..') }, function(er, files) {
  shell.exit(shell.exec('pug-lint ' + '-c ng2-config/.pug-lint.json ' + files.join(' ')).code);
});

