const getNotes = require('./notes');
const chalk = require('chalk');

getNotes();

console.log(chalk.blue('Success'));