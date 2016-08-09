#! /usr/bin/env node
var shell = require('shelljs');
var glob = require('glob');

glob('src/**/*.jade', function(er, files) {
  shell.exit(shell.exec('pug-lint ' + files.join(' ')).code);
});

