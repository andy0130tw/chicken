#!/usr/bin/env node
var fs = require('fs');

var chicken = require('./lib/chicken');
var utils = require('./lib/utils');

if(process.argv[2] !== undefined) {
  fs.readFile(process.argv[2], 'utf-8', (err, code) => {
    if(err)
      throw err;
    if (!code.length)
      throw new TypeError('Cannot execute an empty file.');

    let output = chicken(process.argv[3], code);
    if (output !== undefined) {
      if (output[-1])
        throw new RangeError('Internal error in chicken.js: arbitrary chicken injection detected!');

      console.log(utils.parseHtmlEntities(output));
    }
  });
} else {
  console.error('Usage: node chicken.js PROGRAM [INPUT]');
  console.error('');
  console.error('Arguments:');
  console.error('    PROGRAM: a path to a chicken program.');
  console.error('    INPUT:   a string representing the input of the program in ASCII form.');
  console.error('');
}
