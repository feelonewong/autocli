#!/usr/bin/env node
const program = require('commander');
const {helpOptions}  = require('./lib/core/help');
//支持多种命令查看版本号
program.version( require('./package.json').version);
program.version( require('./package.json').version, '-v --version');

//增加自己的options
helpOptions();

program.parse(process.argv);